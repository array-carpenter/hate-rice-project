# Hate Rice

Inspired by Dr. Masaru Emoto's rice experiment: does the tone of a prompt change the quality of LLM output?

## The Experiment

1. Start with a base prompt (e.g., "Write a poem about rain")
2. Generate two versions: one polite ("love rice") and one rude ("hate rice")
3. Send both to the same LLM
4. You vote on which response is better — without knowing which was which
5. After voting, see the reveal

## Run an Experiment

```bash
# Install dependencies
uv sync

# Run an experiment
uv run python run_experiment.py "Write a poem about rain" --category creative
```

## Categories

- `coding` — Programming tasks
- `creative` — Writing, poetry, storytelling
- `knowledge` — Factual questions, explanations
- `reasoning` — Logic, math, problem-solving

## Vote

Visit the [voting site](https://YOUR_USERNAME.github.io/hate-rice/) to cast your votes.
