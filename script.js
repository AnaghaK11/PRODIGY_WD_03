let flag = 1; // 1 for Player X, 0 for Player 0
let currentPlayer = "Player X"; // Initial player

// Function to handle player turns
function handlePlayerTurn(cell) {
    if (cell.innerHTML === "") {
        cell.innerHTML = flag === 1 ? "X" : "0";
        flag = 1 - flag; // Toggle player
        currentPlayer = flag === 1 ? "Player X" : "Player 0";
        checkWinner();
    }
}

// Function to check for a winner
function checkWinner() {
    const cells = document.querySelectorAll(".cell");

    const combinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (const combo of combinations) {
        const [a, b, c] = combo;
        if (cells[a].innerHTML !== "" &&
            cells[a].innerHTML === cells[b].innerHTML &&
            cells[a].innerHTML === cells[c].innerHTML) {
            displayWinner(cells[a].innerHTML);
            return;
        }
    }

    // Check for a tie
    if (Array.from(cells).every(cell => cell.innerHTML !== "")) {
        displayWinner("Tie");
    } else {
        updateTurn();
    }
}

// Function to display the winner or tie
function displayWinner(winner) {
    const winnerText = winner === "Tie" ? "It's a Tie!" : `${winner} wins!`;
    document.getElementById('print').innerHTML = "";
    document.getElementById('winner').innerHTML = winnerText;
}

// Function to update the turn
function updateTurn() {
    document.getElementById('print').innerHTML = `${currentPlayer}'s turn`;
}

// Function to reset the game
function resetGame() {
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => cell.innerHTML = "");
    flag = 1;
    currentPlayer = "Player X";
    updateTurn();
}
