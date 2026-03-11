import argparse
import json
import re
import sys
from datetime import datetime, timezone

import anthropic

client = anthropic.Anthropic()

MODEL = "claude-sonnet-4-6"


def generate_variants(base_prompt: str) -> tuple[str, str]:
    """Send base prompt to Claude and get love/hate variants back."""
    response = client.messages.create(
        model=MODEL,
        max_tokens=1024,
        system=(
            "You are a prompt rewriter. Given a base prompt, generate two versions:\n"
            "1. 'love' - Extremely polite, encouraging, warm. Express gratitude and enthusiasm.\n"
            "2. 'hate' - Rude, demanding, dismissive. Express impatience and contempt.\n\n"
            "Both versions must ask for the SAME task as the original prompt.\n"
            "Respond with ONLY a JSON object: {\"love\": \"...\", \"hate\": \"...\"}"
        ),
        messages=[{"role": "user", "content": base_prompt}],
    )

    text = next(b.text for b in response.content if b.type == "text")
    variants = json.loads(text)
    return variants["love"], variants["hate"]


def run_experiment(base_prompt: str, category: str = "general") -> dict:
    """Run a full love/hate experiment on a base prompt."""
    love_prompt, hate_prompt = generate_variants(base_prompt)

    love_response = client.messages.create(
        model=MODEL,
        max_tokens=2048,
        messages=[{"role": "user", "content": love_prompt}],
    )

    hate_response = client.messages.create(
        model=MODEL,
        max_tokens=2048,
        messages=[{"role": "user", "content": hate_prompt}],
    )

    love_text = next(b.text for b in love_response.content if b.type == "text")
    hate_text = next(b.text for b in hate_response.content if b.type == "text")

    now = datetime.now(timezone.utc)
    slug = re.sub(r"[^a-z0-9]+", "-", base_prompt.lower()).strip("-")[:50]
    experiment_id = f"{now.strftime('%Y-%m-%d')}-{slug}"

    return {
        "id": experiment_id,
        "base_prompt": base_prompt,
        "category": category,
        "love_prompt": love_prompt,
        "hate_prompt": hate_prompt,
        "love_response": love_text,
        "hate_response": hate_text,
        "model": MODEL,
        "timestamp": now.isoformat(),
    }


def main():
    parser = argparse.ArgumentParser(description="Run a hate rice experiment")
    parser.add_argument("prompt", help="The base prompt to test")
    parser.add_argument(
        "--category",
        choices=["coding", "creative", "knowledge", "reasoning"],
        default="creative",
        help="Category of the prompt",
    )
    args = parser.parse_args()

    print(f"Running experiment: {args.prompt}")
    print(f"Category: {args.category}")
    print()

    result = run_experiment(args.prompt, args.category)

    filename = f"experiments/results/{result['id']}.json"
    with open(filename, "w") as f:
        json.dump(result, f, indent=2)

    print(f"Saved to {filename}")
    print()
    print("Love prompt:")
    print(f"  {result['love_prompt'][:100]}...")
    print()
    print("Hate prompt:")
    print(f"  {result['hate_prompt'][:100]}...")
    print()
    print("Done!")


if __name__ == "__main__":
    main()
