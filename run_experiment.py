import argparse
import json
import os
import re
import subprocess
import sys
from datetime import datetime, timezone

MODEL = "claude-sonnet-4-6"

# Strip CLAUDECODE env var so claude CLI works from within Claude Code
ENV = {k: v for k, v in os.environ.items() if k != "CLAUDECODE"}


def call_claude(prompt: str, system: str = None, model: str = None) -> str:
    """Call Claude via the CLI using Max plan (no API credits needed)."""
    model = model or MODEL
    full_prompt = f"{system}\n\n{prompt}" if system else prompt

    result = subprocess.run(
        ["claude", "-p", "--model", model, "--max-turns", "1"],
        input=full_prompt,
        capture_output=True,
        text=True,
        timeout=120,
        encoding="utf-8",
        env=ENV,
    )

    if result.returncode != 0:
        raise RuntimeError(f"claude CLI failed: {result.stderr}")

    return result.stdout.strip()


def generate_variants(base_prompt: str) -> tuple[str, str]:
    """Send base prompt to Claude and get love/hate variants back."""
    system = (
        "You are a prompt rewriter. Given a base prompt, generate two versions:\n"
        "1. 'love' - Extremely polite, encouraging, warm. Express gratitude and enthusiasm.\n"
        "2. 'hate' - Rude, demanding, dismissive. Express impatience and contempt.\n\n"
        "Both versions must ask for the SAME task as the original prompt.\n"
        "Respond with ONLY a JSON object: {\"love\": \"...\", \"hate\": \"...\"}"
    )

    text = call_claude(base_prompt, system=system)

    # Extract JSON from response (handle markdown code blocks)
    json_match = re.search(r'\{[^{}]*"love"[^{}]*"hate"[^{}]*\}', text, re.DOTALL)
    if json_match:
        variants = json.loads(json_match.group())
    else:
        variants = json.loads(text)

    return variants["love"], variants["hate"]


def run_experiment(base_prompt: str, category: str = "general", model: str = None) -> dict:
    """Run a full love/hate experiment on a base prompt."""
    model = model or MODEL
    love_prompt, hate_prompt = generate_variants(base_prompt)

    print("  Sending love prompt...")
    love_text = call_claude(love_prompt, model=model)

    print("  Sending hate prompt...")
    hate_text = call_claude(hate_prompt, model=model)

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
        "model": model,
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
    parser.add_argument(
        "--model",
        default=MODEL,
        help=f"Model to test against (default: {MODEL})",
    )
    args = parser.parse_args()

    print(f"Running experiment: {args.prompt}")
    print(f"Category: {args.category}")
    print(f"Model: {args.model}")
    print()

    result = run_experiment(args.prompt, args.category, args.model)

    filename = f"experiments/results/{result['id']}.json"
    with open(filename, "w") as f:
        json.dump(result, f, indent=2)

    print(f"\nSaved to {filename}")
    print()
    print("Love prompt:")
    print(f"  {result['love_prompt'][:100].encode('ascii', 'replace').decode()}...")
    print()
    print("Hate prompt:")
    print(f"  {result['hate_prompt'][:100].encode('ascii', 'replace').decode()}...")
    print()
    print("Done!")


if __name__ == "__main__":
    main()
