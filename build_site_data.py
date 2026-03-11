"""Reads experiments/results/*.json and generates site/experiments.js"""
import glob
import json


CATEGORY_ORDER = {"creative": 0, "knowledge": 1, "reasoning": 2, "coding": 3}


def build():
    results = []
    for path in sorted(glob.glob("experiments/results/*.json")):
        with open(path) as f:
            results.append(json.load(f))

    # Sort: category order, then haiku first, then alphabetical by prompt
    results.sort(key=lambda e: (
        CATEGORY_ORDER.get(e["category"], 99),
        0 if "haiku" in e["base_prompt"].lower() else 1,
        e["base_prompt"].lower(),
    ))

    js_content = (
        "// Auto-generated from experiments/results/*.json\n"
        "// Regenerate with: uv run python build_site_data.py\n"
        f"const EXPERIMENTS = {json.dumps(results, indent=2)};\n"
    )

    with open("site/experiments.js", "w") as f:
        f.write(js_content)

    print(f"Generated site/experiments.js with {len(results)} experiments")


if __name__ == "__main__":
    build()
