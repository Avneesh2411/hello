let gameBoard = Array(9).fill(null);
let currentPlayer = { name: 'Player 1', symbol: 'X' };

function Player(name, symbol) {
  this.name = name;
  this.symbol = symbol;
}

function Game(board, player) {
  this.board = board;
  this.currentPlayer = player;
}

function initGame() {
  gameBoard = Array(9).fill(null);
  currentPlayer = new Player('Player 1', 'X');
  renderBoard();
}

function renderBoard() {
  gameBoard.forEach((cell, index) => {
    document.getElementById(`cell-${index}`).textContent = cell;
  });
  document.getElementById('player-display').textContent = currentPlayer.name;
}

function handleClick(index) {
  if (gameBoard[index] === null) {
    gameBoard[index] = currentPlayer.symbol;
    if (checkWin()) {
      alert(`Game Over! ${currentPlayer.name} wins!`);
      resetGame();
    } else {
      currentPlayer = currentPlayer.symbol === 'X' ? new Player('Player 2', 'O') : new Player('Player 1', 'X');
      renderBoard();
    }
  }
}

function checkWin() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  return winningCombinations.some(combination =>
    combination.every(index => gameBoard[index] === currentPlayer.symbol)
  );
}

function resetGame() {
  initGame();
}

document.getElementById('reset-button').addEventListener('click', resetGame);
for (let i = 0; i < 9; i++) {
  document.getElementById(`cell-${i}`).addEventListener('click', () => handleClick(i));
}

initGame();