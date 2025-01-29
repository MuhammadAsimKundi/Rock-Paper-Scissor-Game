const choices = ['rock', 'paper', 'scissors'];

function getRandomChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

document.getElementById('rock').addEventListener('click', () => {
    playGame('rock');
});

document.getElementById('paper').addEventListener('click', () => {
    playGame('paper');
});

document.getElementById('scissors').addEventListener('click', () => {
    playGame('scissors');
});

function playGame(userChoice) {
    const computerChoice = getRandomChoice();

    let result;
    if (userChoice === computerChoice) {
        result = 'It\'s a draw!';
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = 'You win!';
    } else {
        result = 'Computer wins!';
    }

    document.getElementById('result').innerText = `You chose ${userChoice}, computer chose ${computerChoice}. ${result}`;
}