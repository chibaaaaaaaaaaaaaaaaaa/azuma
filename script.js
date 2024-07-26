document.getElementById('partyButton').addEventListener('click', function() {
    createPartyEffect();
});

function createPartyEffect() {
    const colors = ['#ff0000', '#ff9900', '#ffff00', '#33cc33', '#0066ff', '#9900cc'];
    const numConfetti = 300;
    const animationArea = document.getElementById('animationArea');

    for (let i = 0; i < numConfetti; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = Math.random() * 100 + 'vh';
        confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
        confetti.style.animationDelay = Math.random() * 2 + 's';
        animationArea.appendChild(confetti);
    }

    setTimeout(() => {
        while (animationArea.firstChild) {
            animationArea.removeChild(animationArea.firstChild);
        }
    }, 5000);
}
