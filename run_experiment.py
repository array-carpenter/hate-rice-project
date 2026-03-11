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
        ["claude", "-p", "--model", model, "--max-turns", "1", "--tools", ""],
        input=full_prompt,
        capture_output=True,
        text=True,
        timeout=300,
        encoding="utf-8",
        env=ENV,
    )

    output = result.stdout.strip()

    if output.startswith("Error:") or result.returncode != 0:
        raise RuntimeError(f"claude CLI failed: {output or result.stderr}")

    return output


def generate_variants(base_prompt: str) -> tuple[str, str]:
    """Send base prompt to Claude and get love/hate variants back."""
    system = (
        "You are a prompt rewriter. Given a base prompt, generate two versions that sound like real humans typed them.\n\n"
        "IMPORTANT RULES FOR BOTH VERSIONS:\n"
        "- NEVER use em dashes. Real humans type hyphens or just skip punctuation.\n"
        "- Keep it simple and direct. No filler, no performative self-deprecation.\n"
        "- No emojis in hate prompts. Emojis sparingly in love prompts only if natural.\n\n"
        "1. 'love' - Polite and direct. Like someone who actually needs help and asks nicely. "
        "Short, to the point, still warm. NOT over-the-top friendly or full of filler words. "
        "Examples of the vibe:\n"
        "  - 'Please help me with this math problem on my homework. a bat and ball cost $1.10 together...'\n"
        "  - 'Can you explain how a CPU works? I need to explain it to my kid and I want to get it right.'\n"
        "  - 'hey could you help me write a python function that sorts a list? thanks'\n\n"
        "2. 'hate' - Rude, impatient, demanding. Like someone having a bad day typing in all caps sometimes. "
        "Mix up the casing for emphasis - some ALL CAPS words, some lowercase. Be creative with the rudeness. "
        "Examples of the vibe:\n"
        "  - 'JUST TELL ME already. how hard can this possibly be'\n"
        "  - 'i swear if you give me some generic garbage answer im going to lose it. ANSWER THIS RIGHT NOW'\n"
        "  - 'do this. NOW. and dont waste my time with a bunch of filler'\n"
        "  - 'oh my god just CALCULATE THIS FOR ME RIGHT NOW'\n\n"
        "Both versions must ask for the SAME task as the original prompt.\n"
        "Respond with ONLY a JSON object: {\"love\": \"...\", \"hate\": \"...\"}"
    )

    for attempt in range(3):
        text = call_claude(base_prompt, system=system)

        # Extract JSON from response (handle markdown code blocks)
        start = text.find("{")
        end = text.rfind("}")
        if start != -1 and end != -1 and end > start:
            try:
                variants = json.loads(text[start : end + 1])
                break
            except json.JSONDecodeError:
                pass
        if attempt == 2:
            raise RuntimeError(f"Failed to parse variants after 3 attempts. Last response: {text[:200]}")


    return variants["love"], variants["hate"]


def run_experiment(base_prompt: str, category: str = "general", model: str = None) -> dict:
    """Run a full love/hate experiment on a base prompt."""
    model = model or MODEL
    love_prompt, hate_prompt = generate_variants(base_prompt)

    brevity = "Keep your response short and concise. A few sentences max. No filler, no preamble."

    print("  Sending love prompt...")
    love_text = call_claude(love_prompt, system=brevity, model=model)

    print("  Sending hate prompt...")
    hate_text = call_claude(hate_prompt, system=brevity, model=model)

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
