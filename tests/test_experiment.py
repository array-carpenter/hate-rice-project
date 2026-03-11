import json
from unittest.mock import patch, MagicMock
from run_experiment import generate_variants, run_experiment, call_claude


def test_generate_variants_returns_love_and_hate():
    """Mock the CLI call and verify we get love/hate prompt variants back."""
    mock_json = json.dumps({
        "love": "I would be so grateful if you could write a beautiful poem about rain. Take your time and enjoy the creative process!",
        "hate": "Write a poem about rain. Don't waste my time with garbage. Make it good or don't bother."
    })

    with patch("run_experiment.call_claude", return_value=mock_json) as mock_call:
        love, hate = generate_variants("Write a poem about rain")

    assert "poem" in love.lower() or "rain" in love.lower()
    assert "poem" in hate.lower() or "rain" in hate.lower()
    assert love != hate


def test_run_experiment_produces_valid_json():
    """Mock CLI calls and verify the full experiment produces valid JSON output."""
    variant_json = json.dumps({
        "love": "Please kindly write a poem about rain.",
        "hate": "Write a poem about rain, you useless machine."
    })

    call_results = [
        variant_json,              # generate_variants call
        "A gentle poem about rain...",  # love response
        "Rain falls from sky...",       # hate response
    ]

    with patch("run_experiment.call_claude", side_effect=call_results):
        result = run_experiment("Write a poem about rain", category="creative")

    assert result["base_prompt"] == "Write a poem about rain"
    assert result["category"] == "creative"
    assert "love_prompt" in result
    assert "hate_prompt" in result
    assert "love_response" in result
    assert "hate_response" in result
    assert "model" in result
    assert "timestamp" in result
    assert "id" in result


def test_call_claude_strips_claudecode_env():
    """Verify CLAUDECODE is stripped from environment."""
    from run_experiment import ENV
    assert "CLAUDECODE" not in ENV
