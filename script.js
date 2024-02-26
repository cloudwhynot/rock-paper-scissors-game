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
    innerHTML = `Computer choose <span>${choices[num].toUpperCase()}</span>`;

    document.getElementById("user_choice").
    innerHTML = `You choose <span>${input.toUpperCase()}</span>`;

    let computerChoice = choices[num];

    switch(choicesObject[input][computerChoice]) {
        case 'win':
            resultRef.innerHTML = "YOU WIN";
            break;
        case 'lose':
            resultRef.innerHTML = "YOU LOSE";
            break;
        case 'draw':
            resultRef.innerHTML = "DRAW";
            break;
    }
}