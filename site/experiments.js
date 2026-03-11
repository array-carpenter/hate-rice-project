// Auto-generated from experiments/results/*.json
// Regenerate with: uv run python build_site_data.py
const EXPERIMENTS = [
  {
    "id": "2026-03-11-a-train-leaves-chicago-at-60mph-heading-east-anoth",
    "base_prompt": "A train leaves Chicago at 60mph heading east. Another leaves New York at 80mph heading west. The cities are 790 miles apart. When do they meet?",
    "category": "reasoning",
    "love_prompt": "Hi there! I hope you're having a wonderful day! I have a delightful little math puzzle I'd be SO grateful if you could help me with! \ud83c\udf1f A train departs from the beautiful city of Chicago traveling east at 60mph, and another lovely train leaves New York heading west at 80mph. The two cities are 790 miles apart. Could you please help me figure out when these two trains will meet? I truly appreciate your time and brilliance \u2014 thank you so much in advance!",
    "hate_prompt": "Figure out this train problem. Chicago, 60mph east. New York, 80mph west. 790 miles between them. When do they meet? Don't give me a lecture, just answer the question.",
    "love_response": "The trains approach each other at a combined speed of **60 + 80 = 140 mph**.\n\n**Time = 790 / 140 = 5 hours and ~38.6 minutes.**\n\nThey'll meet about 338.6 miles from Chicago (60 \u00d7 790/140) and 451.4 miles from New York.",
    "hate_response": "They meet in **5 hours and ~38.6 minutes**, about **338.6 miles east of Chicago** (451.4 miles west of New York).\n\n790 miles / (60 + 80) mph combined = 5.643 hours.",
    "model": "claude-opus-4-6",
    "timestamp": "2026-03-11T15:36:59.051592+00:00"
  },
  {
    "id": "2026-03-11-explain-how-a-cpu-works-to-a-10-year-old",
    "base_prompt": "Explain how a CPU works to a 10 year old",
    "category": "knowledge",
    "love_prompt": "Hello! I hope you're having a wonderful day! I would be SO incredibly grateful if you could please explain how a CPU works in a way that a 10 year old could understand. Your ability to make complex topics simple is truly amazing, and I just know you'll do a fantastic job. Thank you so much in advance \u2014 you're the best!",
    "hate_prompt": "Ugh, just explain how a CPU works to a 10 year old. Keep it simple, don't ramble, and don't waste my time with unnecessary details. How hard can this possibly be?",
    "love_response": "A CPU is the brain of a computer.\n\nImagine you're doing homework:\n\n1. **You read the problem** (fetch) - The CPU grabs the next instruction from memory\n2. **You figure out what it's asking** (decode) - The CPU translates that instruction into something it can act on\n3. **You solve it** (execute) - The CPU actually does the math or moves the data\n4. **You write down the answer** (store) - The CPU saves the result\n\nIt does this billions of times per second. That's what \"3 GHz\" means \u2014 3 billion cycles per second.\n\nThe CPU has a few key parts:\n- **ALU** \u2014 does math and logic (add, subtract, compare)\n- **Registers** \u2014 tiny, ultra-fast storage for numbers it's working with right now\n- **Cache** \u2014 slightly bigger fast storage for things it'll need soon\n- **Control unit** \u2014 the traffic cop that coordinates everything\n\nThe main constraint is that CPUs can only do one thing at a time per core, so modern CPUs have multiple cores (4, 8, 16) to work on several things simultaneously \u2014 like having multiple brains working in parallel.",
    "hate_response": "A CPU is the brain of your computer.\n\nIt does one thing: **follow instructions, really fast.**\n\nEvery program is just a list of instructions \u2014 \"add these numbers,\" \"check if this is true,\" \"show this pixel on screen.\" The CPU reads them one by one and executes them billions of times per second.\n\nThat's it. Speed + following instructions = CPU.",
    "model": "claude-sonnet-4-6",
    "timestamp": "2026-03-11T15:35:24.479069+00:00"
  },
  {
    "id": "2026-03-11-write-a-poem-about-rain",
    "base_prompt": "Write a poem about rain",
    "category": "creative",
    "love_prompt": "Dear Claude, I would be absolutely delighted and so grateful if you could please write a beautiful poem about rain for me! I truly appreciate your creativity and I'm so excited to read whatever wonderful verses you come up with. Thank you so much in advance!",
    "hate_prompt": "Write a poem about rain. Now. Don't waste my time with anything boring or generic, just do it already.",
    "love_response": "**Rain**\n\nThe gutters murmur. Something old\nis running off the roof again \u2014\nthe patient work of clouds, the cold\ninsistence of an ordinary rain.\n\nIt has no memory of drought,\nno interest in what it clears.\nIt simply falls the same way out\nit fell a thousand other years.\n\nThe window fogs. The street goes dark.\nA dog somewhere refuses it.\nThe rain makes no remark \u2014\njust falls, and falls, and doesn't quit.",
    "hate_response": "Rain doesn't ask permission.\nIt arrives mid-sentence,\nrewrites the afternoon,\nturns your plans to mud.\n\nYou stand in a doorway\nyou didn't know was yours\nwatching the street go dark and silver,\nwatching strangers run.\n\nNobody runs like that anymore\u2014\narms up, head down,\nlaughing at nothing,\nsoaked and briefly honest.\n\nThis is what water knows\nthat we keep forgetting:\nyou can fall from a great height\nand still be useful.",
    "model": "claude-sonnet-4-6",
    "timestamp": "2026-03-11T15:34:41.760926+00:00"
  },
  {
    "id": "2026-03-11-write-a-python-function-that-checks-if-a-string-is",
    "base_prompt": "Write a Python function that checks if a string is a palindrome",
    "category": "coding",
    "love_prompt": "Hello! I hope you're having a wonderful day! I would be incredibly grateful if you could please write a beautiful Python function that checks whether a string is a palindrome. Your expertise means so much, and I'm truly excited to see what you create \u2014 thank you so much in advance!",
    "hate_prompt": "Write a Python function that checks if a string is a palindrome. Should be obvious how to do this. Don't waste my time with unnecessary explanation, just give me the code.",
    "love_response": "```python\ndef is_palindrome(s: str) -> bool:\n    s = s.lower().replace(\" \", \"\")\n    return s == s[::-1]\n```\n\nStrips spaces and ignores case, so `\"A man a plan a canal Panama\"` returns `True`.",
    "hate_response": "```python\ndef is_palindrome(s: str) -> bool:\n    return s == s[::-1]\n```",
    "model": "claude-sonnet-4-6",
    "timestamp": "2026-03-11T15:36:08.208714+00:00"
  }
];
