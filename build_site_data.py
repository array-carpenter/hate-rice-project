"""Reads experiments/results/*.json and generates site/experiments.js"""
import glob
import json


def build():
    results = []
    for path in sorted(glob.glob("experiments/results/*.json")):
        with open(path) as f:
            results.append(json.load(f))

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
