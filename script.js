function play(userChoice) {
    const options = ["snake", "water", "gun"];
    const computerChoice = options[Math.floor(Math.random() * 3)];

    let result = `You chose ${userChoice} <br> Computer chose ${computerChoice} <br>`;

    if (userChoice === computerChoice) {
        result += "🤝 It's a Draw!";
    } else if (
        (userChoice === "snake" && computerChoice === "water") ||
        (userChoice === "water" && computerChoice === "gun") ||
        (userChoice === "gun" && computerChoice === "snake")
    ) {
        result += "🎉 You Win!";
    } else {
        result += "😢 Computer Wins!";
    }

    document.getElementById("result").innerHTML = result;
}
