// Simulate Privacy Score Update
function startScan() {
    const scoreCircle = document.getElementById('scoreCircle');
    const scoreText = document.getElementById('scoreText');
    scoreCircle.textContent = 'Scanning...';
    scoreCircle.style.background = '#ffb07c';

    setTimeout(() => {
        const randomScore = Math.floor(Math.random() * 100);
        scoreCircle.textContent = randomScore;
        scoreCircle.style.background = randomScore > 50 ? '#00d4b5' : '#ff6f61';
        scoreText.textContent = randomScore > 50 ? 'You’re looking good!' : 'Time to lock it down!';
    }, 2000);
}

// Simulate Data Eraser
function eraseData() {
    alert('Erasing your data from the web... Watch it vanish!');
    // Future API call to trigger data removal
}

// Animate Avatar Evolution (placeholder)
const avatarImg = document.getElementById('avatarImg');
avatarImg.addEventListener('click', () => {
    avatarImg.style.transform = 'rotate(360deg)';
    avatarImg.style.transition = 'transform 1s';
    setTimeout(() => {
        avatarImg.src = 'https://via.placeholder.com/100/00d4b5/fff?text=Level+Up';
        avatarImg.style.transform = 'rotate(0deg)';
    }, 1000);
});
