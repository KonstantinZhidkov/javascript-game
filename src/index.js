const button = document.querySelector('#start');
const gameField = document.querySelector('#game');
const gameTimeInput = document.querySelector('#game-time');
const time = document.querySelector('#time');
const timeHeader = document.querySelector('#time-header');
const resultHeader = document.querySelector('#result-header');
const result = document.querySelector('#result');
let isGameStarted = false;
let score = 0;

gameField.addEventListener('click', blockClick);
gameTimeInput.addEventListener('input', setGameTime);
button.addEventListener('click', startGame);

function startGame() {
    isGameStarted = true;

    score = 0;
    setGameTime();
    hide(button);
    gameTimeInput.setAttribute('disabled', 'true');
    gameField.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';

    let interval = setInterval(() => {
        let currentTime = parseFloat(time.textContent);

        if (currentTime <= 0) {
            clearInterval(interval);
            endGame();
        } else {
            time.textContent = (currentTime - 0.1).toFixed(1);
        }
    }, 100);

    generateBlock();
}

function endGame() {
    isGameStarted = false;
    setGameScore(result);
    gameField.innerHTML = '';
    gameTimeInput.removeAttribute('disabled');
    hide(timeHeader);
    show(resultHeader);
    show(button);
    gameField.style.backgroundColor = '#999';
}

function generateBlock() {
    gameField.innerHTML = '';

    let block = document.createElement('div');
    let blockSize = generateRandomMeasurements(30, 100);
    let gameFieldSize = gameField.getBoundingClientRect();
    let maxTop = gameFieldSize.height - blockSize;
    let maxLeft = gameFieldSize.width - blockSize;

    block.style.height = block.style.width = `${blockSize}px`;
    block.style.position = 'absolute';
    block.style.backgroundColor = generateRandomColor();
    block.style.top = `${generateRandomMeasurements(0, maxTop)}px`;
    block.style.left = `${generateRandomMeasurements(0, maxLeft)}px`;
    block.style.cursor = 'pointer';
    block.setAttribute('data-block', 'true');

    gameField.insertAdjacentElement('afterbegin', block);
}

function generateRandomMeasurements(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function generateRandomColor() {
    return `rgb(${generateRandomMeasurements(0, 255)}, ${generateRandomMeasurements(0, 255)}, ${generateRandomMeasurements(0, 255)})`;
}

function show(element) {
    element.classList.remove('hide');
}

function hide(element) {
    element.classList.add('hide');
}

function setGameScore(element) {
    element.textContent = score.toString();
}

function setGameTime() {
    let inputTime = parseInt(gameTimeInput.value);
    time.textContent = inputTime.toFixed(1);
    show(timeHeader);
    hide(resultHeader);
}

function blockClick(event) {
    if (!isGameStarted) {
        return false;
    }

    if (event.target.dataset.block) {
        score++;
        generateBlock();
    }
}