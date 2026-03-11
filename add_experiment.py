"""Manually add an experiment by pasting in prompts and responses."""
import json
import re
from datetime import datetime, timezone


def main():
    print("=== Add Hate Rice Experiment ===\n")

    base_prompt = input("Base prompt: ").strip()

    print("\nCategory options: coding, creative, knowledge, reasoning")
    category = input("Category: ").strip()

    model = input("Model (e.g. claude-sonnet-4-6, claude-opus-4-6): ").strip()

    print("\n--- Love Rice (polite version) ---")
    love_prompt = input("Love prompt: ").strip()
    print("Love response (paste, then enter DONE on its own line):")
    love_lines = []
    while True:
        line = input()
        if line.strip() == "DONE":
            break
        love_lines.append(line)
    love_response = "\n".join(love_lines)

    print("\n--- Hate Rice (rude version) ---")
    hate_prompt = input("Hate prompt: ").strip()
    print("Hate response (paste, then enter DONE on its own line):")
    hate_lines = []
    while True:
        line = input()
        if line.strip() == "DONE":
            break
        hate_lines.append(line)
    hate_response = "\n".join(hate_lines)

    now = datetime.now(timezone.utc)
    slug = re.sub(r"[^a-z0-9]+", "-", base_prompt.lower()).strip("-")[:50]
    experiment_id = f"{now.strftime('%Y-%m-%d')}-{slug}"

    result = {
        "id": experiment_id,
        "base_prompt": base_prompt,
        "category": category,
        "love_prompt": love_prompt,
        "hate_prompt": hate_prompt,
        "love_response": love_response,
        "hate_response": hate_response,
        "model": model,
        "timestamp": now.isoformat(),
    }

    filename = f"experiments/results/{experiment_id}.json"
    with open(filename, "w") as f:
        json.dump(result, f, indent=2)

    print(f"\nSaved to {filename}")
    print("Run 'uv run python build_site_data.py' to update the site.")


if __name__ == "__main__":
    main()
