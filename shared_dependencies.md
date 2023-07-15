1. Exported Variables: 
   - `gameBoard`: An array to represent the game board.
   - `currentPlayer`: A variable to keep track of the current player.

2. Data Schemas: 
   - `Player`: An object to represent a player, with properties for name and symbol (X or O).
   - `Game`: An object to represent the game, with properties for the game board and the current player.

3. ID Names of DOM Elements: 
   - `board`: The main game board.
   - `cell-{index}`: Each cell on the game board, where `{index}` is the cell's index.
   - `player-display`: A display to show the current player.
   - `reset-button`: A button to reset the game.

4. Message Names: 
   - `gameOver`: A message to indicate the game is over.
   - `playerChange`: A message to indicate the current player has changed.

5. Function Names: 
   - `initGame()`: A function to initialize the game.
   - `renderBoard()`: A function to render the game board.
   - `handleClick()`: A function to handle a click on a cell.
   - `checkWin()`: A function to check if a player has won.
   - `resetGame()`: A function to reset the game.