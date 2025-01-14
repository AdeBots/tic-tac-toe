
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
    const boardElement = document.createElement(div);
    const resultElement = document.createElement(div);
    const restartButton= document.createElement(div);
    const board = gameboard.getBoard();

    const handleMove = (row, column) => {
        if (board[row][column] === "") {
            gameboard.inputValue(row, column, currentPlayer);
            const gameResult = gameboard.checkWin();
            if (gameResult) {
                resultElement.textContent = gameResult === "Draw" ? "It's a draw!" : `${gameResult} wins!`;
                boardElement.removeEventListener('click', handleMove);
            } else {
                currentPlayer = currentPlayer === players.playerOneToken ? players.playerTwoToken : players.playerOneToken;
                renderBoard();
            }
        }
    };

    const renderBoard = () => {
        board.innerHTML = '';
        board.forEach((row, rowIndex) => {
            row.forEach((cell, columnIndex) => {
                const cellElement = document.createElement('div');
                cellElement.classList.add('cell');
                cellElement.textContent = cell;
                cellElement.addEventListener('click', () => handleMove(rowIndex, columnIndex));
                boardElement.appendChild(cellElement);
            })
        })
    };

    const playGame = () => {
        players.getPlayerNames();
        currentPlayer = players.playerOneToken;
        board.forEach(row => row.fill(""));
        resultElement.textContent = '';
        renderBoard();
    };

    return { playGame };

})();

displayController.playGame();