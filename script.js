// document.getElementById('partyButton').addEventListener('click', function() {
//     createPartyEffect();
// });

// function createPartyEffect() {
//     const colors = ['#ff0000', '#ff9900', '#ffff00', '#33cc33', '#0066ff', '#9900cc'];
//     const numConfetti = 300;
//     const animationArea = document.getElementById('animationArea');

//     for (let i = 0; i < numConfetti; i++) {
//         const confetti = document.createElement('div');
//         confetti.classList.add('confetti');
//         confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
//         confetti.style.left = Math.random() * 100 + 'vw';
//         confetti.style.top = Math.random() * 100 + 'vh';
//         confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
//         confetti.style.animationDelay = Math.random() * 2 + 's';
//         animationArea.appendChild(confetti);
//     }

//     setTimeout(() => {
//         while (animationArea.firstChild) {
//             animationArea.removeChild(animationArea.firstChild);
//         }
//     }, 5000);
// }

document.getElementById('partyButton').addEventListener('click', function() {
    createPartyEffect();
    createFireworksEffect();
});
 
function createPartyEffect() {
    const colors = ['#ff0000', '#ff9900', '#ffff00', '#33cc33', '#0066ff', '#9900cc'];
    const numConfetti = 300;
    const animationArea = document.getElementById('animationArea');
 
    for (let i = 0; i < numConfetti; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = `calc(50% + ${Math.random() * 200 - 100}vw)`; // 화면 중앙 기준으로 퍼짐
        confetti.style.top = `calc(50% + ${Math.random() * 200 - 100}vh)`; // 화면 중앙 기준으로 퍼짐
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
 
function createFireworksEffect() {
    const animationArea = document.getElementById('animationArea');
    const numFireworks = 10;
    const colors = ['#ff0000', '#ff9900', '#ffff00', '#33cc33', '#0066ff', '#9900cc'];
 
    for (let i = 0; i < numFireworks; i++) {
        const fireworks = document.createElement('div');
        fireworks.classList.add('fireworks');
        fireworks.style.left = `calc(50% + ${Math.random() * 200 - 100}vw)`; // 화면 중앙 기준으로 퍼짐
        fireworks.style.top = `calc(50% + ${Math.random() * 200 - 100}vh)`; // 화면 중앙 기준으로 퍼짐
        fireworks.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        fireworks.style.animationDuration = '2s';
        animationArea.appendChild(fireworks);
    }
 
    setTimeout(() => {
        const fireworks = document.querySelectorAll('.fireworks');
        fireworks.forEach(firework => animationArea.removeChild(firework));
    }, 2000);
}
