// --- Config ---
// Supabase project URL and anon key for vote storage
// Set these after creating your Supabase project
const SUPABASE_URL = "https://piqycumadzatirszlpqb.supabase.co";
const SUPABASE_KEY = "sb_publishable_oEKMRVSocR2C8OLLO_7_NA_cZvwJowh";

// --- Helpers ---

function getVotedExperiments() {
    try {
        return JSON.parse(localStorage.getItem("haterice_voted") || "[]");
    } catch {
        return [];
    }
}

function markAsVoted(experimentId) {
    var voted = getVotedExperiments();
    voted.push(experimentId);
    localStorage.setItem("haterice_voted", JSON.stringify(voted));
}

function hasVoted(experimentId) {
    return getVotedExperiments().includes(experimentId);
}

function escapeHtml(str) {
    var div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
}

// --- Experiment List (index.html) ---

function loadExperimentList() {
    var list = document.getElementById("experiment-list");
    if (!list) return;

    var voted = getVotedExperiments();

    document.querySelectorAll(".category-filters button").forEach(function(btn) {
        btn.addEventListener("click", function() {
            document.querySelectorAll(".category-filters button").forEach(function(b) {
                b.classList.remove("active");
            });
            btn.classList.add("active");
            renderList(btn.dataset.category);
        });
    });

    renderList("all");

    function renderList(category) {
        var filtered = category === "all"
            ? EXPERIMENTS
            : EXPERIMENTS.filter(function(e) { return e.category === category; });

        list.innerHTML = filtered.map(function(exp) {
            var votedLabel = voted.includes(exp.id) ? " (voted)" : "";
            return '<a class="experiment-card" href="index.html?id=' + encodeURIComponent(exp.id) + '">' +
                '<div class="category">' + escapeHtml(exp.category) + votedLabel + '</div>' +
                '<div class="prompt">' + escapeHtml(exp.base_prompt) + '</div>' +
                '<div class="meta">' + escapeHtml(exp.model) + ' &middot; ' + new Date(exp.timestamp).toLocaleDateString() + '</div>' +
                '</a>';
        }).join("");

        if (filtered.length === 0) {
            list.innerHTML = '<p style="text-align:center;color:#555;">No experiments in this category yet.</p>';
        }
    }
}

// --- Vote Page ---

var currentExperiment = null;
var selectedChoice = null;
var isLoveA = false;
var currentCategory = null;

function loadVotePage() {
    var params = new URLSearchParams(window.location.search);
    var id = params.get("id");
    var cat = params.get("cat");

    if (id) {
        var exp = EXPERIMENTS.find(function(e) { return e.id === id; });
        if (exp) {
            currentCategory = exp.category;
            showExperiment(exp);
            return;
        }
    }

    if (cat) {
        startCategory(cat);
        return;
    }

    // Show category picker by default
}

function startCategory(category) {
    currentCategory = category;
    document.getElementById("category-picker").classList.add("hidden");
    loadNextExperiment();
}

function loadNextExperiment() {
    var voted = getVotedExperiments();
    var pool = EXPERIMENTS.filter(function(e) {
        return e.category === currentCategory && !voted.includes(e.id);
    });

    if (pool.length === 0) {
        // All voted in this category, recycle
        pool = EXPERIMENTS.filter(function(e) { return e.category === currentCategory; });
    }

    if (pool.length === 0) {
        document.getElementById("vote-area").innerHTML =
            '<p style="text-align:center;color:#888;">No experiments in this category yet.</p>';
        return;
    }

    showExperiment(pool[Math.floor(Math.random() * pool.length)]);
}

function showExperiment(exp) {
    currentExperiment = exp;
    selectedChoice = null;

    document.getElementById("category-picker").classList.add("hidden");
    document.getElementById("vote-area").classList.remove("hidden");
    document.getElementById("reveal-area").classList.add("hidden");

    // If already voted on this one, show reveal
    if (hasVoted(exp.id)) {
        showRevealFromStorage(exp.id);
        return;
    }

    // Reset vote button
    var btn = document.getElementById("vote-btn");
    btn.disabled = true;
    btn.textContent = "Pick one to vote";
    document.getElementById("response-a").classList.remove("selected");
    document.getElementById("response-b").classList.remove("selected");

    // Randomly assign love/hate to A/B
    isLoveA = Math.random() < 0.5;

    document.getElementById("base-prompt-text").textContent = exp.base_prompt;

    var responseA = isLoveA ? exp.love_response : exp.hate_response;
    var responseB = isLoveA ? exp.hate_response : exp.love_response;

    if (typeof marked !== "undefined") {
        marked.setOptions({
            highlight: function(code, lang) {
                if (typeof hljs !== "undefined" && lang && hljs.getLanguage(lang)) {
                    return hljs.highlight(code, { language: lang }).value;
                }
                return typeof hljs !== "undefined" ? hljs.highlightAuto(code).value : code;
            }
        });
        document.getElementById("response-a-text").innerHTML = marked.parse(responseA);
        document.getElementById("response-b-text").innerHTML = marked.parse(responseB);
    } else {
        document.getElementById("response-a-text").textContent = responseA;
        document.getElementById("response-b-text").textContent = responseB;
    }
}

function skipExperiment() {
    loadNextExperiment();
}

function selectResponse(choice) {
    selectedChoice = choice;
    document.getElementById("response-a").classList.toggle("selected", choice === "a");
    document.getElementById("response-b").classList.toggle("selected", choice === "b");

    var btn = document.getElementById("vote-btn");
    btn.disabled = false;
    btn.textContent = "Vote for Response " + choice.toUpperCase();
}

function submitVote() {
    if (!selectedChoice || !currentExperiment) return;

    var pickedLove = (selectedChoice === "a" && isLoveA) || (selectedChoice === "b" && !isLoveA);
    var voteType = pickedLove ? "love" : "hate";

    // Save vote to Supabase if configured
    if (SUPABASE_URL && SUPABASE_KEY) {
        fetch(SUPABASE_URL + "/rest/v1/votes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "apikey": SUPABASE_KEY,
                "Authorization": "Bearer " + SUPABASE_KEY,
                "Prefer": "return=minimal"
            },
            body: JSON.stringify({
                experiment_id: currentExperiment.id,
                vote: voteType
            })
        }).catch(function(e) {
            console.error("Failed to save vote:", e);
        });
    }

    // Mark as voted locally
    markAsVoted(currentExperiment.id);
    localStorage.setItem("haterice_vote_" + currentExperiment.id, voteType);

    // Show reveal
    showReveal(voteType);
}

function showReveal(voteType) {
    document.getElementById("vote-area").classList.add("hidden");

    var revealArea = document.getElementById("reveal-area");
    revealArea.classList.remove("hidden");

    var isLove = voteType === "love";
    var emoji = isLove ? "&#x1F35A;" : "&#x1F525;";
    var label = isLove ? "Love Rice" : "Hate Rice";
    var verdictClass = isLove ? "love" : "hate";

    // Build reveal HTML first, then fetch vote counts
    revealArea.innerHTML =
        '<div class="reveal">' +
            '<h2>' + emoji + ' You picked the ' + label + ' response!</h2>' +
            '<p class="verdict ' + verdictClass + '">' +
                (isLove ? "You preferred the polite version." : "You preferred the rude version.") +
            '</p>' +
            '<div class="prompt-comparison">' +
                '<div class="prompt-box love">' +
                    '<label>Love Rice Prompt</label>' +
                    escapeHtml(currentExperiment.love_prompt) +
                '</div>' +
                '<div class="prompt-box hate">' +
                    '<label>Hate Rice Prompt</label>' +
                    escapeHtml(currentExperiment.hate_prompt) +
                '</div>' +
            '</div>' +
            '<div class="tally" id="vote-tally"></div>' +
        '</div>' +
        '<a href="javascript:void(0)" class="vote-btn" style="text-align:center;text-decoration:none;" onclick="loadNextExperiment()">' +
            'Next experiment' +
        '</a>' +
        '<a href="index.html" class="skip-btn" style="text-align:center;text-decoration:none;margin-top:0.5rem;display:block;">' +
            'Change category' +
        '</a>';

    // Fetch and display vote counts
    if (SUPABASE_URL && SUPABASE_KEY) {
        fetch(
            SUPABASE_URL + "/rest/v1/votes?experiment_id=eq." + currentExperiment.id + "&select=vote",
            { headers: { "apikey": SUPABASE_KEY } }
        )
        .then(function(res) { return res.json(); })
        .then(function(votes) {
            var loveCt = votes.filter(function(v) { return v.vote === "love"; }).length;
            var hateCt = votes.filter(function(v) { return v.vote === "hate"; }).length;
            var total = loveCt + hateCt;
            if (total > 0) {
                document.getElementById("vote-tally").innerHTML =
                    '<span class="love-count">&#x1F35A; Love: ' + loveCt + ' (' + Math.round(loveCt / total * 100) + '%)</span>' +
                    '<span class="hate-count">&#x1F525; Hate: ' + hateCt + ' (' + Math.round(hateCt / total * 100) + '%)</span>';
            }
        })
        .catch(function(e) {
            console.error("Failed to fetch votes:", e);
        });
    }
}

function showRevealFromStorage(id) {
    currentExperiment = EXPERIMENTS.find(function(e) { return e.id === id; });
    var voteType = localStorage.getItem("haterice_vote_" + id) || "love";
    document.getElementById("base-prompt-text").textContent = currentExperiment.base_prompt;
    showReveal(voteType);
}

// --- Results Page (results.html) ---

function loadResultsPage() {
    var grid = document.getElementById("stats-grid");
    var breakdown = document.getElementById("category-breakdown");
    if (!grid) return;

    if (!SUPABASE_URL || !SUPABASE_KEY) {
        grid.innerHTML = '<div class="stat-card"><div class="number">' + EXPERIMENTS.length + '</div><div class="label">Experiments</div></div>';
        breakdown.innerHTML = '<p style="text-align:center;color:#555;margin-top:2rem;">Vote tracking will show results once Supabase is connected.</p>';
        return;
    }

    grid.innerHTML = '<p style="color:#555;">Loading results...</p>';

    fetch(
        SUPABASE_URL + "/rest/v1/votes?select=experiment_id,vote",
        { headers: { "apikey": SUPABASE_KEY } }
    )
    .then(function(res) { return res.json(); })
    .then(function(allVotes) {
        var totalVotes = allVotes.length;
        var loveVotes = allVotes.filter(function(v) { return v.vote === "love"; }).length;
        var hateVotes = allVotes.filter(function(v) { return v.vote === "hate"; }).length;
        var lovePercent = totalVotes > 0 ? Math.round(loveVotes / totalVotes * 100) : 0;

        grid.innerHTML =
            '<div class="stat-card"><div class="number">' + totalVotes + '</div><div class="label">Total Votes</div></div>' +
            '<div class="stat-card"><div class="number" style="color:#4ade80;">' + lovePercent + '%</div><div class="label">Preferred Love Rice</div></div>' +
            '<div class="stat-card"><div class="number" style="color:#f87171;">' + (100 - lovePercent) + '%</div><div class="label">Preferred Hate Rice</div></div>' +
            '<div class="stat-card"><div class="number">' + EXPERIMENTS.length + '</div><div class="label">Experiments</div></div>';

        // Category breakdown
        var categories = ["coding", "creative", "knowledge", "reasoning"];
        var breakdownHtml = "<h2 style='margin-bottom:1rem;'>By Category</h2>";

        categories.forEach(function(cat) {
            var catExperimentIds = EXPERIMENTS.filter(function(e) { return e.category === cat; }).map(function(e) { return e.id; });
            var catVotes = allVotes.filter(function(v) { return catExperimentIds.includes(v.experiment_id); });
            var catLove = catVotes.filter(function(v) { return v.vote === "love"; }).length;
            var catTotal = catVotes.length;
            var catPercent = catTotal > 0 ? Math.round(catLove / catTotal * 100) : 0;

            if (catTotal > 0) {
                breakdownHtml +=
                    '<div class="stat-card" style="margin-bottom:0.5rem;">' +
                        '<div class="prompt">' + cat.charAt(0).toUpperCase() + cat.slice(1) + ': ' +
                            '<span style="color:#4ade80;">' + catPercent + '% love</span> / ' +
                            '<span style="color:#f87171;">' + (100 - catPercent) + '% hate</span> ' +
                            '(' + catTotal + ' votes)' +
                        '</div>' +
                    '</div>';
            }
        });

        breakdown.innerHTML = breakdownHtml;
    })
    .catch(function(e) {
        grid.innerHTML = '<p style="color:#555;">Failed to load results. Try again later.</p>';
    });
}
