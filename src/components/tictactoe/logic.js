import { randomChoice, setPcChoice } from "./pcChoice";

const WINNING_LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export const endGame = (setTurn, winner) => {
  setTurn(null);
  console.log(`O vencedor é ${winner}!!!!`);
};

export const checkWinner = (board) => {
  for (const line of WINNING_LINES) {
    const [a, b, c] = line;

    if (board[a] !== null && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
};

export const afterUserTurn = (turn, setTurn, setBoard, board) => {
  let winner = null;
  winner = checkWinner(board);
  if (winner) {
    console.log("O resultado é: " + winner);
    setTurn(null);
    endGame(setTurn, winner);
    return;
  }
  if (turn === "COMPUTER-TURN") {

    const pcOptions = [0, 1, 2, 3, 4, 5, 6, 7, 8];

    setTimeout(() => {
      // Opções de escolhas do computador

      setBoard((prevBoard) => {
        const newBoard = [...prevBoard];
        let pcChoice = setPcChoice(newBoard);

        if (pcChoice > 8 && pcChoice < 0) {
          pcChoice = pcOptions[Math.floor(Math.random() * pcOptions.length)];
        }

        while (newBoard[pcChoice] !== null) {
          pcChoice = randomChoice();
        }

        newBoard[pcChoice] = "O";

        if (!winner) {
          setTurn("USER-TURN");
        }

        return newBoard;
      });
    }, 400);
  }
};
