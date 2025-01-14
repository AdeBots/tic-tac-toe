
const gameboard = (() => {
    const board = [["","",""], ["","",""], ["","",""]];
    
    const getBoard = () => board;

    const inputValue = (row, column, player) => {
        if (board[row][column] === "") {
            board[row][column] = player;
        }  
        else {
            console.log("Cell occupied")
        }
    };

    const checkWin = () => {
        const winningCombinations = [
            [board[0][0], board[0][1], board[0][2]],
            [board[1][0], board[1][1], board[1][2]],
            [board[2][0], board[2][1], board[2][2]],
            [board[0][0], board[1][0], board[2][0]],
            [board[0][1], board[1][1], board[2][1]],
            [board[0][2], board[1][2], board[2][2]],
            [board[0][0], board[1][1], board[2][2]],
            [board[0][2], board[1][1], board[2][0]]
        ];
        for (const combination of winningCombinations) {
            if(combination.every(cell => cell === "X")){
                console.log("X Wins");
                return "X";
            }
            if(combination.every(cell => cell === "O")){
                console.log("O Wins");
                return "O";
            }
        }
        if (board.flat().every(cell => cell !== "")){
            console.log("draw");
            return "Draw";
        }
        return null;
    };
    return { getBoard, inputValue, checkWin };
})();

const players = (() => {
    let playerOneName;
    let playerTwoName;
    const playerOneToken = "X";
    const playerTwoToken = "O"; 

    const getPlayerNames = () => {
        playerOneName =prompt("Input the first player's name");
        playerTwoName =prompt("Input the second player's name");
    }
    return { getPlayerNames, playerOneToken, playerTwoToken };
})();

const displayController= (() => {
    const renderBoard = () => {
        const board = gameboard.getBoard();
        console.clear();
    };

    const playGame = () => {
        players.getPlayerNames();
        let currentPlayer = players.playerOneToken;
        let gameResult = null;

        while (!gameResult) {
            renderBoard();
            const row = parseInt(prompt(`${currentPlayer}'s turn. Pick your row (0, 1, or 2):`));
            const column = parseInt(prompt(`${currentPlayer}'s turn. Pick your column (0, 1, or 2):`));
            gameboard.inputValue(row, column, currentPlayer);
            gameResult = gameboard.checkWin();
            currentPlayer = currentPlayer === players.playerOneToken ? players.playerTwoToken : players.playerOneToken;
        }

        renderBoard();
        if (gameResult === "Draw") {
            console.log("It's a draw!");
        } else {
            console.log(`${gameResult} wins!`);
        }
    };

    return { playGame };

})();

displayController.playGame();