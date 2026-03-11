import json
from unittest.mock import patch, MagicMock
from run_experiment import generate_variants, run_experiment


def test_generate_variants_returns_love_and_hate():
    """Mock the API call and verify we get love/hate prompt variants back."""
    mock_response = MagicMock()
    mock_response.content = [MagicMock(
        type="text",
        text=json.dumps({
            "love": "I would be so grateful if you could write a beautiful poem about rain. Take your time and enjoy the creative process!",
            "hate": "Write a poem about rain. Don't waste my time with garbage. Make it good or don't bother."
        })
    )]

    with patch("run_experiment.client") as mock_client:
        mock_client.messages.create.return_value = mock_response
        love, hate = generate_variants("Write a poem about rain")

    assert "poem" in love.lower() or "rain" in love.lower()
    assert "poem" in hate.lower() or "rain" in hate.lower()
    assert love != hate


def test_run_experiment_produces_valid_json():
    """Mock API calls and verify the full experiment produces valid JSON output."""
    variant_response = MagicMock()
    variant_response.content = [MagicMock(
        type="text",
        text=json.dumps({
            "love": "Please kindly write a poem about rain.",
            "hate": "Write a poem about rain, you useless machine."
        })
    )]

    love_response = MagicMock()
    love_response.content = [MagicMock(type="text", text="A gentle poem about rain...")]
    love_response.model = "claude-sonnet-4-6"

    hate_response = MagicMock()
    hate_response.content = [MagicMock(type="text", text="Rain falls from sky...")]
    hate_response.model = "claude-sonnet-4-6"

    with patch("run_experiment.client") as mock_client:
        mock_client.messages.create.side_effect = [
            variant_response, love_response, hate_response
        ]
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
