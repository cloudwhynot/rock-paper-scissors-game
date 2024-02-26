let [computerScore, userScore] = [0, 0];

let resultRef = document.getElementById("result");

let choicesObject = {
    'rock' : {
        'rock' : 'draw',
        'scissors' : 'win',
        'paper' : 'lose',
    },
    'scissors' : {
        'rock' : 'lose',
        'scissors' : 'draw',
        'paper' : 'win',
    },
    'paper' : {
        'rock' : 'win',
        'scissors' : 'lose',
        'paper' : 'draw',
    }
}

function checker(input) {
    let choices = ["rock", "paper", "scissors"];
    let num = Math.floor(Math.random() * 3);

    document.getElementById("computer_choice").
    innerHTML = `Computer chose <span>${choices[num].toUpperCase()}</span>`;

    document.getElementById("user_choice").
    innerHTML = `You chose <span>${input.toUpperCase()}</span>`;

    let computerChoice = choices[num];

    switch(choicesObject[input][computerChoice]) {
        case 'win':
            resultRef.style.cssText = `
            background-color: #cefdce;
            color: #689f38;
            `;
            resultRef.innerHTML = "YOU WON";
            userScore++;
            break;
        case 'lose':
            resultRef.style.cssText = `
            background-color: #ffdde0;
            color: #d32f2f;
            `;
            resultRef.innerHTML = "YOU LOST";
            computerScore++;
            break;
        case 'draw':
            resultRef.style.cssText = `
            background-color: #e5e5e5;
            color: #808080;
            `;
            resultRef.innerHTML = "DRAW";
            break;
    }

    document.getElementById('computer_score').innerHTML = computerScore;
    document.getElementById('user_score').innerHTML = userScore;
}