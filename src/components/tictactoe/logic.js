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

const endGame = (setTurn, winner) => {
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

export const afterUserTurn = (turn, setTurn, setBoard) => {
  if (turn === "USER-TURN") {
    setTurn("COMPUTER-TURN");

    let winner = null;;
    let pcChoice = null;
    let sort = null;

    setTimeout(() => {
      // Opções de escolhas do computador
      const pcOptions = [0, 1, 2, 3, 4, 5, 6, 7, 8];


      console.log("O computador escolheu!", pcChoice);


      setBoard((prevBoard) => {
        const newBoard = [...prevBoard];
        if (winner) return newBoard

        if (newBoard[0] === "X" && newBoard[1] === "X" && newBoard[2] === null) {
          sort = pcOptions[Math.floor(Math.random() * 2)];
          sort === 1
            ? (pcChoice = 2)
            : (pcChoice = pcOptions[Math.floor(Math.random() * pcOptions.length)]);
        }

        if (
          (newBoard[3] === "O" && newBoard[6] === "O") ||
          (newBoard[1] === "O" && newBoard[2] === "O") ||
          (newBoard[4] === "O" && newBoard[8] === "O")
        ) {
          pcChoice = 0;
          newBoard[pcChoice] === null
            ? (pcChoice = pcOptions[Math.floor(Math.random() * pcOptions.length)])
            : null;
        }

        if (
          (newBoard[0] === "O" && newBoard[2] === "O") ||
          (newBoard[4] === "O" && newBoard[7] === "O") ||
          (newBoard[4] === "O" && newBoard[8] === "O")
        ) {
          pcChoice = 1;
          newBoard[pcChoice] === null
            ? (pcChoice = pcOptions[Math.floor(Math.random() * pcOptions.length)])
            : null;
        }

        if (
          (newBoard[0] === "O" && newBoard[1] === "O") ||
          (newBoard[5] === "O" && newBoard[8] === "O") ||
          (newBoard[6] === "O" && newBoard[4] === "O")
        ) {
          pcChoice = 2;
          newBoard[pcChoice] === null
            ? (pcChoice = pcOptions[Math.floor(Math.random() * pcOptions.length)])
            : null;
        }

        if (
          (newBoard[0] === "O" && newBoard[6] === "O") ||
          (newBoard[4] === "O" && newBoard[5] === "O")
        ) {
          pcChoice = 3;
          newBoard[pcChoice] === null
            ? (pcChoice = pcOptions[Math.floor(Math.random() * pcOptions.length)])
            : null;
        }

        if (
          (newBoard[3] === "O" && newBoard[5] === "O") ||
          (newBoard[1] === "O" && newBoard[7] === "O") ||
          (newBoard[6] === "O" && newBoard[2] === "O") ||
          (newBoard[0] === "O" && newBoard[8] === "O")
        ) {
          pcChoice = 4;
          newBoard[pcChoice] === null
            ? (pcChoice = pcOptions[Math.floor(Math.random() * pcOptions.length)])
            : null;
        }

        if (
          (newBoard[2] === "O" && newBoard[8] === "O") ||
          (newBoard[3] === "O" && newBoard[4] === "O")
        ) {
          pcChoice = 5;
          newBoard[pcChoice] === null
            ? (pcChoice = pcOptions[Math.floor(Math.random() * pcOptions.length)])
            : null;
        }

        if (
          (newBoard[0] === "O" && newBoard[3] === "O") ||
          (newBoard[7] === "O" && newBoard[8] === "O") ||
          (newBoard[4] === "O" && newBoard[2] === "O")
        ) {
          pcChoice = 6;
          newBoard[pcChoice] === null
            ? (pcChoice = pcOptions[Math.floor(Math.random() * pcOptions.length)])
            : null;
        }

        if (
          (newBoard[6] === "O" && newBoard[8] === "O") ||
          (newBoard[1] === "O" && newBoard[4] === "O")
        ) {
          pcChoice = 7;
          newBoard[pcChoice] === null
            ? (pcChoice = pcOptions[Math.floor(Math.random() * pcOptions.length)])
            : null;
        }

        if (
          (newBoard[2] === "O" && newBoard[5] === "O") ||
          (newBoard[6] === "O" && newBoard[7] === "O") ||
          (newBoard[0] === "O" && newBoard[4] === "O")
        ) {
          pcChoice = 8;
          newBoard[pcChoice] === null
            ? (pcChoice = pcOptions[Math.floor(Math.random() * pcOptions.length)])
            : null;
        }

        do {
          pcChoice = pcOptions[Math.floor(Math.random() * pcOptions.length)];
          const isDraw = newBoard.every((cell) => cell !== null);

          if (isDraw) {
            winner = "DRAW";
            endGame(setTurn);
            return newBoard;
          }
        } while (newBoard[pcChoice] !== null && !winner);

        newBoard[pcChoice] = "O";

        winner = checkWinner(newBoard);

        if (winner) {
          console.log("O resultado é: " + winner);
          setTurn(null);
          endGame(setTurn, winner);
          return newBoard;
        }

        if (!winner) {
          setTurn("USER-TURN");
        }

        return newBoard;
      });
    }, 400);
  }
};
