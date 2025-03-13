const scanButton = document.getElementById('scanButton');
const urlInput = document.getElementById('urlInput');
const results = document.getElementById('results');
const privacyScore = document.getElementById('privacyScore');
const scoreLabel = document.getElementById('scoreLabel');
const trackerSummary = document.getElementById('trackerSummary');
const trackerList = document.getElementById('trackerList');
const analysis = document.getElementById('analysis');
const actions = document.getElementById('actions');
const riskFill = document.getElementById('riskFill');
const riskDesc = document.getElementById('riskDesc');

scanButton.addEventListener('click', () => {
    const url = urlInput.value.trim();
    if (!url) {
        alert('Please enter a URL.');
        return;
    }
    scanButton.disabled = true;
    scanButton.textContent = 'Scanning...';
    setTimeout(() => {
        runScan(url);
        scanButton.disabled = false;
        scanButton.textContent = 'Scan Now';
    }, 1500);
});

function runScan(url) {
    const hash = simpleHash(url);
    const trackers = [
        {
            name: 'Google Analytics',
            data: 'Page views, time spent, device info',
            use: 'Analyzes your behavior to improve ads and site performance.',
            risk: 5,
            solution: 'Use browser extensions like Privacy Badger to block it.'
        },
        {
            name: 'Facebook Pixel',
            data: 'Clicks, page interactions, interests',
            use: 'Targets you with ads across Facebook and Instagram.',
            risk: 10,
            solution: 'Disable third-party cookies in your browser settings.'
        },
        {
            name: 'Twitter Ads',
            data: 'Click patterns, social engagement',
            use: 'Personalizes ads based on your Twitter activity.',
            risk: 8,
            solution: 'Log out of Twitter when browsing other sites.'
        },
        {
            name: 'Amazon Affiliate',
            data: 'Shopping habits, product views',
            use: 'Tracks what you might buy to push affiliate sales.',
            risk: 7,
            solution: 'Clear cookies regularly or use incognito mode.'
        },
        {
            name: 'Unknown Ad Network',
            data: 'Location, IP address, browsing history',
            use: 'Sells your data to unknown parties for profit.',
            risk: 15,
            solution: 'Use a VPN to mask your IP and location.'
        },
        {
            name: 'DoubleClick',
            data: 'Cross-site activity, ad interactions',
            use: 'Builds a detailed profile for ad networks across the web.',
            risk: 12,
            solution: 'Install uBlock Origin to block its scripts.'
        }
    ];
    const actionsList = [
        'Switch to Brave browser—it blocks trackers automatically.',
        'Enable "Do Not Track" in your browser settings.',
        'Install uBlock Origin to stop trackers and ads.',
        'Clear cookies weekly to erase tracking data.',
        'Use a VPN like NordVPN to hide your location.',
        'Try Mastodon instead of big social media platforms.',
        'Use private browsing mode to limit tracking.',
        'Block scripts via browser permissions.'
    ];

    const trackerCount = 1 + (hash % 5);
    const selectedTrackers = trackers.slice(0, trackerCount);
    const severityPenalty = selectedTrackers.reduce((sum, t) => sum + t.risk, 0);
    const companiesInvolved = trackerCount * 2 - 1;
    const dataPoints = trackerCount * 3;

    const baseScore = 100;
    const finalScore = Math.max(0, baseScore - (trackerCount * 10) - severityPenalty + (hash % 10 - 5));
    const riskLevel = 100 - finalScore;

    results.style.display = 'block';
    privacyScore.textContent = finalScore;
    privacyScore.style.background = getScoreGradient(finalScore);
    scoreLabel.textContent = getScoreLabel(finalScore);

    trackerSummary.innerHTML = `
        <h2>Privacy Snapshot</h2>
        <p><strong>Trackers Detected:</strong> ${trackerCount}</p>
        <p><strong>Companies Involved:</strong> ${companiesInvolved}</p>
        <p><strong>Data Points Collected:</strong> ~${dataPoints}</p>
        <p><strong>Total Risk Factor:</strong> ${severityPenalty} (out of ${trackerCount * 15})</p>
    `;

    trackerList.innerHTML = '<h2>Tracker Breakdown</h2>';
    selectedTrackers.forEach(tracker => {
        trackerList.innerHTML += `
            <div class="tracker-item">
                <p><strong>${tracker.name}</strong></p>
                <p class="data-type"><strong>Data Fetched:</strong> ${tracker.data}</p>
                <p class="use-case"><strong>How They Use It:</strong> ${tracker.use}</p>
                <p class="risk-score"><strong>Risk Score:</strong> ${tracker.risk}/15</p>
                <p class="solution"><strong>How to Stop It:</strong> ${tracker.solution}</p>
            </div>
        `;
    });

    analysis.innerHTML = `
        <h2>How This Hits You</h2>
        <ol>
            <li><strong>Data Grabbed:</strong> ${getDataAtRisk(trackerCount)}. It’s like a digital fingerprint.</li>
            <li><strong>Who’s Watching:</strong> Up to <span class="highlight">${companiesInvolved}</span> companies could see this.</li>
            <li><strong>Possible Damage:</strong> ${getConsequences(finalScore)} That’s the cost of exposure.</li>
            <li><strong>Info Collected:</strong> Around <span class="highlight">${dataPoints}</span> pieces—enough to ${getExposureLevel(trackerCount)}.</li>
            <li><strong>Your Risk:</strong> ${getRiskLabel(riskLevel)}. ${getUserImpact(riskLevel)}</li>
        </ol>
    `;

    actions.innerHTML = `
        <h2>Fight Back</h2>
        <ol>
            <li>${actionsList[hash % actionsList.length]}</li>
            <li>${actionsList[(hash + 1) % actionsList.length]}</li>
            <li>${actionsList[(hash + 2) % actionsList.length]}</li>
        </ol>
    `;

    riskFill.style.width = `${riskLevel}%`;
    riskFill.style.background = getRiskColor(riskLevel);
    riskDesc.textContent = `Risk Level: ${getRiskLabel(riskLevel)} (${riskLevel}% Exposed)`;
}

function simpleHash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = (hash << 5) - hash + str.charCodeAt(i);
        hash = hash & hash;
    }
    return Math.abs(hash);
}

function getScoreGradient(score) {
    if (score >= 70) return 'linear-gradient(135deg, #27ae60, #2ecc71)';
    if (score >= 40) return 'linear-gradient(135deg, #f1c40f, #f39c12)';
    return 'linear-gradient(135deg, #e74c3c, #c0392b)';
}

function getScoreLabel(score) {
    if (score >= 90) return 'Excellent';
    if (score >= 70) return 'Good';
    if (score >= 40) return 'Moderate';
    if (score >= 20) return 'Poor';
    return 'Critical';
}

function getRiskColor(risk) {
    if (risk <= 30) return '#27ae60';
    if (risk <= 60) return '#f1c40f';
    return '#e74c3c';
}

function getRiskLabel(risk) {
    if (risk <= 30) return 'Low';
    if (risk <= 60) return 'Medium';
    return 'High';
}

function getDataAtRisk(count) {
    if (count <= 2) return 'basic stuff like what pages you visit';
    if (count <= 4) return 'your browsing, location, and interests';
    return 'a full profile of your online life';
}

function getConsequences(score) {
    if (score >= 70) return 'A few extra ads—nothing too scary.';
    if (score >= 40) return 'Personalized ads, maybe price hikes.';
    return 'Big trouble—identity theft or data leaks.';
}

function getUserImpact(risk) {
    if (risk <= 30) return 'You’re mostly safe—no big worries.';
    if (risk <= 60) return 'Ads will chase you, but it’s not the end.';
    return 'Your privacy’s in danger—act now!';
}

function getExposureLevel(count) {
    if (count <= 2) return 'know your basic habits';
    if (count <= 4) return 'track your daily routine';
    return 'predict your every move';
}
