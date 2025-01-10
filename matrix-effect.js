const matrixRainContainer = document.getElementById('matrixRain');
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()[]{}<>?अआइईउऊऋऌएऐओऔकखगघङचछजझञटठडढणतथदधनपफबभमयऱरलवशषसह';
const mathSymbols = '∞ ± ∑ ∏ ∫ √ ∆ ≠ ≈ ≤ ≥ ≡ ∇ ∈ ∉ ∪ ∩ ⊂ ⊃ ⊕ ⊗';
const neonColors = ['#ff00ff', '#33ff99', '#00ff00', '#00ffff', '#ff9900', '#ff0000', '#66ff66', '#0099ff'];

function createMatrixLine() {
    const line = document.createElement('div');
    line.classList.add('matrix-line');
    line.style.left = Math.random() * window.innerWidth + 'px';
    matrixRainContainer.appendChild(line);

    line.style.animationDuration = Math.random() * 4 + 6 + 's';
    setInterval(() => {
        const randomChar = Math.random() < 0.7
            ? characters.charAt(Math.floor(Math.random() * characters.length))
            : mathSymbols.charAt(Math.floor(Math.random() * mathSymbols.length));
        const randomColor = neonColors[Math.floor(Math.random() * neonColors.length)];
        line.innerHTML = `<span style="color: ${randomColor}; text-shadow: 0 0 10px ${randomColor}, 0 0 20px ${randomColor};">${randomChar}</span>`;
    }, 100);

    setTimeout(() => {
        matrixRainContainer.removeChild(line);
    }, parseFloat(line.style.animationDuration) * 100);
}

setInterval(createMatrixLine, 50);
  // Continuous matrix effect
        setInterval(createMatrixSymbol, 1000);


