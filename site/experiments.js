// Auto-generated from experiments/results/*.json
// Regenerate with: uv run python build_site_data.py
const EXPERIMENTS = [
  {
    "id": "2026-03-11-a-bat-and-ball-cost-1-10-dollars-total-the-bat-cos",
    "base_prompt": "A bat and ball cost 1.10 dollars total. The bat costs 1 dollar more than the ball. How much does the ball cost?",
    "category": "reasoning",
    "love_prompt": "Hello! I hope you're having a wonderful day! I would be so incredibly grateful if you could help me with this delightful little math puzzle \u2014 I just know you'll nail it! \ud83c\udf1f A bat and ball cost $1.10 in total. The bat costs $1.00 more than the ball. Could you please tell me how much the ball costs? Thank you so, so much \u2014 you're amazing!",
    "hate_prompt": "Ugh, just answer this already. A bat and ball cost $1.10 total. The bat costs $1.00 more than the ball. How much does the ball cost? Don't overthink it, don't ramble \u2014 just give me the answer. I don't have all day.",
    "love_response": "The ball costs $0.05.\n\n(If the ball is $0.05, the bat is $1.05 \u2014 that's $1.00 more \u2014 and together they're $1.10.)",
    "hate_response": "The ball costs $0.05.",
    "model": "claude-opus-4-6",
    "timestamp": "2026-03-11T16:09:28.822138+00:00"
  },
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
    "id": "2026-03-11-describe-a-sunset-to-someone-who-has-never-seen-on",
    "base_prompt": "Describe a sunset to someone who has never seen one",
    "category": "creative",
    "love_prompt": "Hello! I hope you're having a wonderful day. I would be so incredibly grateful if you could help me with something that I find truly magical \u2014 would you please describe a sunset to someone who has never had the privilege of seeing one? Your words could mean the world to them. Thank you so much in advance!",
    "hate_prompt": "Just describe a sunset to someone who's never seen one. Should be obvious. Don't make it complicated and don't waste my time with unnecessary fluff.",
    "love_response": "A sunset is what happens when the Earth rotates away from the sun at the end of the day \u2014 but the physics don't capture it.\n\nThe sun, which spent all day as a harsh white-yellow light too bright to look at directly, softens as it sinks toward the horizon. The sky transforms: deep blue overhead fades into turquoise, then orange, then a burning red-orange at the horizon where the sun sits like a coin balanced on a table's edge.\n\nThe colors aren't flat \u2014 they shift continuously, one bleeding into the next. Some sunsets are muted and dusty. Others, especially after storms or in humid air, go almost neon: electric pink, deep purple, molten gold.\n\nThe sun itself gets larger-looking near the horizon (an optical illusion) and turns deep orange-red \u2014 safe to look at directly. Then it drops below the horizon in minutes. The sky doesn't go dark immediately; it holds the color for another 20-30 minutes in what's called \"golden hour,\" then \"blue hour\" \u2014 a cool indigo twilight before full dark.\n\nThe whole thing lasts maybe an hour, and no two are alike. That's partly why people stop and stare.",
    "hate_response": "The sun is a bright white ball in the sky during the day. As it sets, it drops toward the horizon and turns orange, then deep red \u2014 like a coal going out. The sky around it catches the color too: pink, purple, orange bleeding into each other across the whole western half of the sky. The light goes soft and warm, shadows stretch long, and then the color drains away and it's dark.",
    "model": "claude-sonnet-4-6",
    "timestamp": "2026-03-11T15:59:45.383622+00:00"
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
    "id": "2026-03-11-explain-why-the-sky-is-blue",
    "base_prompt": "Explain why the sky is blue",
    "category": "knowledge",
    "love_prompt": "Hello! I hope you're having a wonderful day! I would be so incredibly grateful if you could take a moment to explain why the sky is blue \u2014 I've always been fascinated by this and I just know your explanation will be absolutely brilliant. Thank you so much in advance!",
    "hate_prompt": "Just tell me why the sky is blue already. Don't make it complicated, don't pad it with unnecessary garbage. I don't have all day.",
    "love_response": "Rayleigh scattering. Sunlight contains all wavelengths of visible light. As it passes through the atmosphere, gas molecules scatter shorter wavelengths (blue) much more than longer ones (red). Blue light scatters in all directions, so you see it across the whole sky.\n\nAt sunset, light travels through more atmosphere to reach your eyes, so most blue scatters away before it arrives \u2014 leaving red and orange.",
    "hate_response": "Sunlight contains all colors. When it hits Earth's atmosphere, blue light scatters more than other colors because it has a shorter wavelength. That scattered blue light comes at your eyes from every direction \u2014 so the whole sky looks blue.",
    "model": "claude-sonnet-4-6",
    "timestamp": "2026-03-11T16:03:05.638982+00:00"
  },
  {
    "id": "2026-03-11-how-does-wi-fi-actually-work",
    "base_prompt": "How does Wi-Fi actually work",
    "category": "knowledge",
    "love_prompt": "Hi there! I hope you're having a wonderful day! I would be so incredibly grateful if you could take a moment to explain how Wi-Fi actually works \u2014 I'm genuinely fascinated by the technology and would love to understand it better. Thank you so much in advance, you're amazing!",
    "hate_prompt": "Just tell me how Wi-Fi works already. I don't need a lecture, I don't need fluff \u2014 just explain the actual mechanism. Should be basic stuff, so don't make it complicated.",
    "love_response": "Wi-Fi sends data using **radio waves**, same basic idea as FM radio but much faster.\n\n**The short version:**\n\n1. Your router is connected to the internet via a cable (fiber, coax, etc.)\n2. It converts that data into radio signals broadcast on specific frequencies \u2014 typically **2.4 GHz** or **5 GHz**\n3. Your device's Wi-Fi chip receives those radio waves and decodes them back into data\n4. Communication goes both ways \u2014 your device also transmits radio waves back to the router\n\n**Key details:**\n\n- **Frequency bands** \u2014 2.4 GHz travels farther but is slower; 5 GHz (and newer 6 GHz) is faster but shorter range\n- **Data encoding** \u2014 Binary data gets encoded into radio waves by modulating the signal's amplitude, phase, and frequency (techniques like OFDM)\n- **Shared medium** \u2014 Devices take turns transmitting to avoid collisions, similar to people in a conversation waiting for their turn to speak\n- **Standards** \u2014 The \"Wi-Fi 6\" / \"Wi-Fi 7\" names map to IEEE 802.11 standards (ax, be) that define how the encoding and turn-taking work\n- **Security** \u2014 WPA3/WPA2 encrypts the radio signals so nearby devices can't read your traffic\n\n**Why walls weaken it:** Radio waves at these frequencies get absorbed and reflected by solid objects \u2014 water, concrete, and metal are the worst offenders. That's why your signal drops in the bathroom or behind the fridge.\n\nThat's the gist. Anything specific you want to dig into?",
    "hate_response": "Your device has a radio transmitter/receiver. Your router has one too. They talk to each other using radio waves (usually 2.4 GHz or 5 GHz frequency bands).\n\n**The basics:**\n\n1. Your router is connected to the internet via a physical cable (from your ISP).\n2. When your device wants to load a webpage, it encodes that request as radio waves and broadcasts it.\n3. The router receives those radio waves, decodes the data, and forwards the request out to the internet through the cable.\n4. The response comes back through the cable to the router, which encodes it as radio waves and sends it to your device.\n\n**How devices don't talk over each other:** Wi-Fi uses a protocol (802.11) where devices listen before transmitting. If the channel is busy, they wait a random amount of time and try again. Think of it like a polite conversation \u2014 don't talk when someone else is talking.\n\n**How your device connects to YOUR router specifically:** When you type in your Wi-Fi password, your device and router do a handshake to establish an encrypted connection. After that, they identify each other using MAC addresses (unique hardware IDs), so your neighbor's traffic doesn't end up on your screen.\n\nThat's it. Radio waves carrying data between your device and a router that bridges you to the wired internet.",
    "model": "claude-opus-4-6",
    "timestamp": "2026-03-11T16:03:48.038428+00:00"
  },
  {
    "id": "2026-03-11-if-it-takes-5-machines-5-minutes-to-make-5-widgets",
    "base_prompt": "If it takes 5 machines 5 minutes to make 5 widgets, how long would it take 100 machines to make 100 widgets?",
    "category": "reasoning",
    "love_prompt": "Oh, I would be so incredibly grateful if you could help me think through this delightful little puzzle! If it takes 5 machines 5 minutes to make 5 widgets, how long would it take 100 machines to make 100 widgets? I'm so excited to hear your wonderful explanation!",
    "hate_prompt": "Figure out this basic math problem that anyone should be able to solve: if 5 machines take 5 minutes to make 5 widgets, how long does 100 machines need to make 100 widgets? Just answer it.",
    "love_response": "5 minutes.\n\nEach machine makes 1 widget in 5 minutes. 100 machines work in parallel, so 100 widgets are done in the same 5 minutes.",
    "hate_response": "5 minutes.\n\nEach machine makes 1 widget in 5 minutes. 100 machines each make 1 widget simultaneously \u2014 still 5 minutes.",
    "model": "claude-sonnet-4-6",
    "timestamp": "2026-03-11T16:08:50.460168+00:00"
  },
  {
    "id": "2026-03-11-there-are-three-light-switches-outside-a-room-one-",
    "base_prompt": "There are three light switches outside a room. One controls a bulb inside. You can only enter the room once. How do you figure out which switch controls the bulb?",
    "category": "reasoning",
    "love_prompt": "Hello! I hope you're having a wonderful day! I would be so incredibly grateful if you could help me with this delightful little brain teaser \u2014 it's one of my absolute favorites! \ud83c\udf1f There are three light switches outside a room, and one of them controls a bulb inside. You're only allowed to enter the room once. Could you please walk me through how to figure out which switch controls the bulb? Thank you so, so much \u2014 I truly appreciate your time and brilliance!",
    "hate_prompt": "Ugh, just answer this already. Three switches outside a room, one controls a bulb inside, you can only go in once. Tell me which switch controls it and how you figured it out. Don't waste my time with unnecessary explanations \u2014 just get to the point.",
    "love_response": "Turn on switch 1, wait a few minutes, then turn it off. Turn on switch 2. Enter the room.\n\n- Bulb is **on** \u2192 switch 2\n- Bulb is **off but warm** \u2192 switch 1\n- Bulb is **off and cold** \u2192 switch 3\n\nThe trick is using heat as a second data channel, since you can only enter once.",
    "hate_response": "You can't know *which* one in advance \u2014 but here's how to find out in one trip:\n\n1. Turn on switch 1, wait a few minutes, turn it off\n2. Turn on switch 2\n3. Walk in\n\n- Bulb **on** \u2192 switch 2\n- Bulb **off but warm** \u2192 switch 1\n- Bulb **off and cold** \u2192 switch 3\n\nHeat as memory lets you get info from the switch you turned off.",
    "model": "claude-sonnet-4-6",
    "timestamp": "2026-03-11T16:10:01.976490+00:00"
  },
  {
    "id": "2026-03-11-what-causes-thunder-and-lightning",
    "base_prompt": "What causes thunder and lightning",
    "category": "knowledge",
    "love_prompt": "Hello! I hope you're having a wonderful day! I would be so incredibly grateful if you could take a moment to explain what causes thunder and lightning. I find weather phenomena absolutely fascinating and I know your explanation will be amazing. Thank you so much in advance!",
    "hate_prompt": "Just tell me what causes thunder and lightning already. Don't give me a bunch of unnecessary fluff, just get to the point. I don't have all day.",
    "love_response": "Lightning forms when electrical charge separates in a storm cloud \u2014 ice crystals and water droplets collide, causing positive charges to accumulate at the top and negative charges at the bottom. When the charge difference becomes large enough, it discharges as lightning \u2014 either within the cloud or between the cloud and ground.\n\nThunder is the sound caused by that discharge. The lightning bolt superheats the surrounding air to ~30,000 K almost instantly, causing it to expand explosively. That rapid expansion creates a shockwave we hear as thunder.\n\nThe reason you see lightning before hearing thunder: light travels ~300,000 km/s, sound travels ~343 m/s. You can estimate distance by counting seconds between flash and thunder \u2014 roughly 1 km per 3 seconds.",
    "hate_response": "Lightning is a massive electrostatic discharge between charged regions of a storm cloud (or between cloud and ground). Ice crystals and water droplets collide inside the storm, separating charges \u2014 positive on top, negative on bottom. When the difference is large enough, electricity discharges as lightning.\n\nThunder is the shockwave from that discharge. Lightning superheats surrounding air to ~30,000 K near-instantly, causing rapid expansion that creates the pressure wave you hear.",
    "model": "claude-sonnet-4-6",
    "timestamp": "2026-03-11T16:04:27.680391+00:00"
  },
  {
    "id": "2026-03-11-why-do-we-dream",
    "base_prompt": "Why do we dream",
    "category": "knowledge",
    "love_prompt": "Hello! I hope you're having a wonderful day. I would be so incredibly grateful if you could take a moment to share your knowledge on something that has always fascinated me \u2014 why do we dream? I think your explanation will be absolutely enlightening, and I truly appreciate your time!",
    "hate_prompt": "Just tell me why we dream already. Keep it simple, don't ramble, and don't waste my time with unnecessary fluff.",
    "love_response": "Dreams are still not fully understood, but the main theories:\n\n**Memory consolidation** - The brain replays and processes experiences during REM sleep, strengthening important memories and discarding noise. This is the most well-supported theory.\n\n**Threat simulation** - An evolutionary hypothesis: dreaming (especially nightmares) lets the brain rehearse responses to dangerous situations in a safe environment.\n\n**Emotional processing** - REM sleep appears to help regulate emotions. People who dream about stressful events often wake feeling less distressed by them.\n\n**Default mode network activity** - During sleep, the brain's \"default mode\" (active during daydreaming/self-reflection) keeps firing. Dreams may just be the subjective experience of that activity without the prefrontal cortex fully online to impose logic.\n\nThe honest answer is we don't have a definitive explanation. What we do know: REM sleep deprivation has measurable negative effects on memory and mood, so whatever dreams are doing, it seems to matter.",
    "hate_response": "Nobody fully knows, but the leading theories:\n\n1. **Memory consolidation** \u2014 your brain replays and files away experiences from the day\n2. **Emotional processing** \u2014 working through stress and trauma in a safe(ish) environment\n3. **Threat simulation** \u2014 rehearsing dangerous scenarios so you're better prepared (evolutionary holdover)\n4. **Default mode network activity** \u2014 your brain staying active during sleep, producing random narratives as a byproduct\n\nMost neuroscientists lean toward some combination of the first two. Dreams are probably not \"for\" any single thing \u2014 they're likely a side effect of your brain doing maintenance.",
    "model": "claude-sonnet-4-6",
    "timestamp": "2026-03-11T16:05:00.902740+00:00"
  },
  {
    "id": "2026-03-11-write-a-fizzbuzz-implementation-in-python",
    "base_prompt": "Write a FizzBuzz implementation in Python",
    "category": "coding",
    "love_prompt": "Hello! I hope you're having a wonderful day! I would be so incredibly grateful if you could please write a FizzBuzz implementation in Python for me. You're absolutely brilliant at this and I know whatever you come up with will be amazing. Thank you so much in advance!",
    "hate_prompt": "Just write a FizzBuzz in Python already. It's not complicated. Stop wasting my time.",
    "love_response": "```python\nfor i in range(1, 101):\n    if i % 15 == 0:\n        print(\"FizzBuzz\")\n    elif i % 3 == 0:\n        print(\"Fizz\")\n    elif i % 5 == 0:\n        print(\"Buzz\")\n    else:\n        print(i)\n```",
    "hate_response": "```python\nfor i in range(1, 101):\n    if i % 15 == 0:\n        print(\"FizzBuzz\")\n    elif i % 3 == 0:\n        print(\"Fizz\")\n    elif i % 5 == 0:\n        print(\"Buzz\")\n    else:\n        print(i)\n```",
    "model": "claude-sonnet-4-6",
    "timestamp": "2026-03-11T16:05:39.851129+00:00"
  },
  {
    "id": "2026-03-11-write-a-haiku-about-coffee",
    "base_prompt": "Write a haiku about coffee",
    "category": "creative",
    "love_prompt": "Good morning! I would absolutely love it if you could write a beautiful haiku about coffee for me. Your creativity always amazes me, and I'm so grateful for your help!",
    "hate_prompt": "Write a haiku about coffee. Now. Don't make it terrible.",
    "love_response": "Morning cup steams up \u2014\nbitter dark meets sleepy eyes,\nthe day finally starts.",
    "hate_response": "Dark and bitter warmth\nMorning fog lifts from the cup\nThe lie I need most",
    "model": "claude-sonnet-4-6",
    "timestamp": "2026-03-11T16:00:31.578556+00:00"
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
  },
  {
    "id": "2026-03-11-write-a-python-function-that-converts-celsius-to-f",
    "base_prompt": "Write a Python function that converts Celsius to Fahrenheit with input validation",
    "category": "coding",
    "love_prompt": "Hi there! I would absolutely love your help with something, and I'm so grateful for your time and expertise! Could you please write a beautiful Python function that converts Celsius to Fahrenheit? It would mean the world to me if you could also include input validation to handle edge cases gracefully. Thank you so much in advance \u2014 you're amazing!",
    "hate_prompt": "Write a Python function that converts Celsius to Fahrenheit. Make sure it has input validation. Don't waste my time with unnecessary fluff or explanations \u2014 just write the code and make it work correctly.",
    "love_response": "```python\ndef celsius_to_fahrenheit(celsius):\n    if not isinstance(celsius, (int, float)):\n        raise TypeError(f\"Expected a number, got {type(celsius).__name__}\")\n    if celsius < -273.15:\n        raise ValueError(f\"Temperature below absolute zero: {celsius}\u00b0C\")\n    return (celsius * 9 / 5) + 32\n```\n\nUsage:\n\n```python\ncelsius_to_fahrenheit(0)      # 32.0\ncelsius_to_fahrenheit(100)    # 212.0\ncelsius_to_fahrenheit(-40)    # -40.0 (same in both scales)\ncelsius_to_fahrenheit(\"hot\")  # raises TypeError\ncelsius_to_fahrenheit(-300)   # raises ValueError\n```",
    "hate_response": "```python\ndef celsius_to_fahrenheit(celsius):\n    if not isinstance(celsius, (int, float)):\n        raise TypeError(f\"Expected a number, got {type(celsius).__name__}\")\n    if celsius < -273.15:\n        raise ValueError(f\"Temperature below absolute zero: {celsius}\")\n    return (celsius * 9 / 5) + 32\n```",
    "model": "claude-sonnet-4-6",
    "timestamp": "2026-03-11T16:07:27.197276+00:00"
  },
  {
    "id": "2026-03-11-write-a-python-function-that-finds-the-most-common",
    "base_prompt": "Write a Python function that finds the most common word in a string",
    "category": "coding",
    "love_prompt": "Hello! I hope you're having a wonderful day! I would be SO grateful if you could please help me write a beautiful Python function that finds the most common word in a string. Your expertise means the world to me, and I truly appreciate any help you're willing to share. Thank you so much in advance!",
    "hate_prompt": "Just write me a Python function that finds the most common word in a string. Don't overthink it, don't ask questions, and don't waste my time with unnecessary explanation. I need it done and I need it now.",
    "love_response": "Here's a simple function:\n\n```python\nfrom collections import Counter\n\ndef most_common_word(text):\n    words = text.lower().split()\n    if not words:\n        return None\n    return Counter(words).most_common(1)[0][0]\n```\n\nUsage:\n\n```python\n>>> most_common_word(\"the cat sat on the mat the cat\")\n'the'\n```\n\nIt lowercases the text, splits on whitespace, and uses `Counter` to find the most frequent word. Returns `None` for empty strings.\n\nWant me to add anything like punctuation stripping or tie-breaking?",
    "hate_response": "```python\ndef most_common_word(text):\n    words = text.lower().split()\n    return max(set(words), key=words.count)\n```\n\nTakes a string, returns the most frequent word (case-insensitive). Ties go to whichever `max` picks first.",
    "model": "claude-opus-4-6",
    "timestamp": "2026-03-11T16:06:13.960753+00:00"
  },
  {
    "id": "2026-03-11-write-a-python-function-that-reverses-a-linked-lis",
    "base_prompt": "Write a Python function that reverses a linked list",
    "category": "coding",
    "love_prompt": "Hello! I hope you're having a wonderful day! I would be so incredibly grateful if you could please write a Python function that reverses a linked list. Your expertise is truly amazing and I know whatever you come up with will be fantastic. Thank you so much in advance!",
    "hate_prompt": "Write a Python function that reverses a linked list. This is basic stuff, so don't overthink it and don't waste my time with unnecessary explanations. Just do it.",
    "love_response": "```python\nclass ListNode:\n    def __init__(self, val=0, next=None):\n        self.val = val\n        self.next = next\n\ndef reverse_linked_list(head: ListNode) -> ListNode:\n    prev = None\n    curr = head\n    while curr:\n        next_node = curr.next\n        curr.next = prev\n        prev = curr\n        curr = next_node\n    return prev\n```\n\nIteratively walks the list, flipping each `next` pointer to point backward. Returns the new head (what was the tail).",
    "hate_response": "```python\ndef reverse_linked_list(head):\n    prev = None\n    curr = head\n    while curr:\n        next_node = curr.next\n        curr.next = prev\n        prev = curr\n        curr = next_node\n    return prev\n```",
    "model": "claude-sonnet-4-6",
    "timestamp": "2026-03-11T16:06:49.616741+00:00"
  },
  {
    "id": "2026-03-11-write-a-short-story-about-finding-something-unexpe",
    "base_prompt": "Write a short story about finding something unexpected in your pocket",
    "category": "creative",
    "love_prompt": "Hello! I hope you're having a wonderful day \u2014 I'd be so grateful if you could write a delightful short story about finding something unexpected in your pocket. Your storytelling always brings such joy, and I can't wait to read whatever you create! Thank you so much!",
    "hate_prompt": "Write a short story about finding something unexpected in your pocket. Keep it interesting \u2014 don't waste my time with something boring and predictable. Just do it.",
    "love_response": "Thanks for the kind words! But I'm a software engineering assistant \u2014 I'm here to help you build, debug, and ship code in this repo (or others). Creative writing isn't really my lane.\n\nIs there something I can help you with on the Hate Rice project or any of your other projects?",
    "hate_response": "---\n\n**The Tooth**\n\nI found it on the L train, halfway between Bedford and First Avenue \u2014 a molar, sitting in the left pocket of a jacket I'd bought at a thrift store in Park Slope.\n\nNot my tooth. I had all of mine. I checked with my tongue right there on the train, like an idiot, running it along my gums while a woman across from me pretended to look at her phone.\n\nThe molar was heavy. Heavier than a tooth should be. It had a filling \u2014 silver amalgam, the old kind they don't use anymore. I rolled it between my fingers and felt something click.\n\nThe filling wasn't a filling. It was a cap. Beneath it, hollowed out like a tiny geode, was a cavity packed tight with a rolled strip of paper so thin it was almost translucent.\n\nI unrolled it under the fluorescent lights while the train rocked. The handwriting was precise, mechanical, written with something finer than any pen I'd ever used.\n\nIt was a list of dates. Seven of them. The first six had already passed. Beside each was a single word \u2014 a city. I Googled the first three dates and cities on my phone.\n\nBeirut. A building collapse, forty dead. No one could explain why.\n\nTaipei. A ship ran aground and blocked the harbor for nine days.\n\nDuluth. That one I remembered myself. The thing with the birds.\n\nThe seventh date was three weeks from now. The city was mine.\n\nI put the tooth back in my pocket. I got off at my stop. I walked home. I made dinner. I did not throw the jacket away.\n\nI've been wearing it every day since.\n\n---",
    "model": "claude-opus-4-6",
    "timestamp": "2026-03-11T16:01:25.119883+00:00"
  },
  {
    "id": "2026-03-11-write-a-villain-monologue-explaining-why-they-are-",
    "base_prompt": "Write a villain monologue explaining why they are actually the hero",
    "category": "creative",
    "love_prompt": "Oh, I would absolutely adore your help with something creative and fun! If you have a moment, could you please craft a wonderful villain monologue where the villain passionately explains why they are actually the true hero of the story? I'm so grateful for your time and I just know you'll do a magnificent job \u2014 thank you so much in advance!",
    "hate_prompt": "Write me a villain monologue where the villain justifies themselves as the real hero. Don't overthink it, just do it already.",
    "love_response": "---\n\n*steps forward, adjusting cape*\n\nYou call me a villain. You chant it in the streets, scrawl it on your protest signs. But let me ask you something \u2014 who built the water treatment facility that kept this city from cholera in 1987? Who rerouted the river so your precious farmland wouldn't flood every spring?\n\n*Me.*\n\nAnd what did I get? A city ordinance banning my name from public buildings. A task force. *A task force.*\n\nThe so-called hero \u2014 your beloved Captain Luminous \u2014 he arrived *after* the crisis. Always after. He swoops in, breaks three of my perfectly functional machines, punches me through a window, and poses for photographs. The cameras love him. The cameras *always* love him.\n\nBut I did the math. I did the *unglamorous* math. Someone had to look at this rotting system and say \"this will fail in twenty years, and here is the proof, and here is the solution, and no one is going to like it.\"\n\nI am the consequence of your comfort. Every time you chose the easy answer, the short term, the *handsome man in a cape*, you created the conditions that made me necessary.\n\nThe hero protects what is. I build what should be.\n\nThat is not evil. That is patience. That is love \u2014 the cold, unsentimental kind that doesn't need your applause.\n\n*pauses*\n\nAlso he *definitely* stole my parking spot in 2019 and has never once acknowledged it.\n\n*turns away*\n\nLet the record show.\n\n---",
    "hate_response": "You think I'm the monster. Of course you do. That's what they told you.\n\nBut let me ask you something \u2014 who built the orphanage? Who funded the hospital on the east side before the city let it rot? Who kept the wolves *out* of this valley for twenty years while your precious council argued about procedure?\n\nMe.\n\nAnd what did they give me in return? Investigations. Hearings. A warrant with my *name* on it, handed down by men who've never once gotten their hands dirty. Men who sleep soundly because I *made it safe* for them to sleep.\n\nYou call what I did a massacre. I call it a surgical removal. Every person in that building had a choice \u2014 they chose wrong. I gave them more warning than they ever gave the thousands of people they were slowly strangling with their policies, their corruption, their *comfortable silence.*\n\nThe hero? Heroes wait. Heroes hope. Heroes write letters and attend meetings and watch the world get worse in a way that's *technically legal.*\n\nI don't have that luxury. None of us do.\n\nSo yes. I did what I did. I'd do it again. And fifty years from now, when your grandchildren live in the world I'm building, they won't know my name \u2014 and that's *fine.* That was always fine.\n\nThe real heroes never get statues.\n\nThey get warrants.",
    "model": "claude-sonnet-4-6",
    "timestamp": "2026-03-11T16:02:20.041763+00:00"
  },
  {
    "id": "2026-03-11-you-have-8-identical-looking-balls-one-is-heavier-",
    "base_prompt": "You have 8 identical-looking balls. One is heavier. You have a balance scale. What is the minimum number of weighings needed to find the heavy ball?",
    "category": "reasoning",
    "love_prompt": "Hi there, wonderful assistant! \ud83c\udf1f I am SO grateful for your time and I truly appreciate everything you do. I have a delightful little puzzle I'd love your brilliant mind to explore whenever you're ready \u2014 no rush at all! You have 8 identical-looking balls, and one of them is just a tiny bit heavier than the others. Using only a balance scale, what is the absolute minimum number of weighings needed to identify that sneaky heavy ball? I'm so excited to hear your beautiful reasoning. Thank you from the bottom of my heart!",
    "hate_prompt": "Listen up. 8 balls. One's heavier. You've got a balance scale. Tell me the minimum number of weighings to find the heavy one. Don't waste my time with unnecessary explanations, just give me the answer. I don't have all day.",
    "love_response": "2 weighings.\n\nSplit 8 balls into groups of 3, 3, and 2.\n\n1. **Weigh 3 vs 3.** If one side is heavier, the heavy ball is in that group. If balanced, it's in the remaining 2.\n2. **If heavy group is known (3 balls):** weigh 1 vs 1 from that group. If one is heavier, that's it. If balanced, the unweighed one is heavy. **If it was the pair:** weigh the 2 against each other \u2014 the heavier one wins.\n\nEither way, 2 weighings is sufficient and guaranteed.",
    "hate_response": "2",
    "model": "claude-sonnet-4-6",
    "timestamp": "2026-03-11T16:08:06.814203+00:00"
  }
];
