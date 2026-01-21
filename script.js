let playerScore = 0;
let computerScore = 0;

//GAME FUNCTION
function play(userChoice) {
    const options = ["snake", "water", "sniper"];
    const computerChoice = options[Math.floor(Math.random() * options.length)];

    let result = `
        You chose: ${userChoice} <br>
        Computer chose: ${computerChoice} <br>
    `;

    if (userChoice === computerChoice) {
        result += "🤝 It's a Draw!";
    } 
    else if (
        (userChoice === "snake" && computerChoice === "water") ||
        (userChoice === "water" && computerChoice === "sniper") ||
        (userChoice === "sniper" && computerChoice === "snake")
    ) {
        result += "🎉 You Win!";
        playerScore++;
    } 
    else {
        result += "😢 Computer Wins!";
        computerScore++;
    }

    // Update scores
    document.getElementById("playerScore").innerText = playerScore;
    document.getElementById("computerScore").innerText = computerScore;

    // Show result
    document.getElementById("result").innerHTML = result;
}

//DARK MODE TOGGLE
const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        toggleBtn.innerText = "☀️ Light Mode";
    } else {
        toggleBtn.innerText = "🌙 Dark Mode";
    }
});
