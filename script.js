function checker(input) {
    let choices = ["rock", "paper", "scissors"];
    let num = Math.floor(Math.random() * 3);

    document.getElementById("computer_choice").
    innerHTML = `Computer choose <span>${choices[num].toUpperCase()}</span>`;

    document.getElementById("user_choice").
    innerHTML = `You choose <span>${input.toUpperCase}</span>`;
}