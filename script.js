
function gameboard(){
    const board = [["","",""], ["","",""], ["","",""]];
    //first box = gameboard[0][0]

    const getBoard = () => board;

    const inputValue = (row, column, player) => {
        if (board[row][column] === "") {
            board[row][column] = player;
        }  
    };

    function checkWin(){
        if(board[0][0] === board[0][1] === board[0][2] === "X" || board[0][0] === board[1][0] === board[2][0] === "X"
            || board[2][0] === board[2][1] === board[2][2] === "X" || board[0][2] === board[1][2] === board[2][2] === "X"
            || board[0][1] === board[1][1] === board[2][1] === "X" || board[1][0] === board[1][1] === board[1][2] === "X"
            || board[0][0] === board[1][1] === board[2][2] === "X" || board[0][2] === board[1][1] === board[2][0] === "X"){ 
           console.log("X Wins");
        }
        else if(board[0][0] === board[0][1] === board[0][2] === "O"){
            console.log("O Wins");
        }
        else if("){
            console.log("X Wins");
        }
        else if(board[0][0] === board[0][1] === board[0][2] === "X"){
            console.log("X Wins");
        }
        else if(board[0][0] === board[0][1] === board[0][2] === "X"){
            console.log("X Wins");
        }
        else if(board[0][0] === board[0][1] === board[0][2] === "X"){
            console.log("X Wins");
        }
        else if(board[0][0] === board[0][1] === board[0][2] === "X"){
            console.log("X Wins");
        }
        else if(board[0][0] === board[0][1] === board[0][2] === "X"){
            console.log("X Wins");
        }
        else if(board[0][0] === board[0][1] === board[0][2] === "X"){
            console.log("X Wins");
        }
        
    }

    function checkTie(){

    }

    return { getBoard, inputValue, checkWin, checkTie };
}

function players(){
    let playerOneName;
    let playerTwoName;
    const playerOneToken = "X";
    const playerTwoToken = "O"; 

    function getPlayerNames(){
        playerOneName =prompt("Input the first player's name");
        playerTwoName =prompt("Input the second player's name");
    }
    return { getPlayerNames, playerOneToken, playerTwoToken };
}

function displayConttroller(){
    const renderBoard = () => {
        const board = gameboard.getBoard();
    };

    return { renderBoard };
}

displayConttroller.renderBoard();