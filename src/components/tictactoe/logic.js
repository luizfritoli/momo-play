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

const checkWinner = (board, setWinner) => {
  for (const line of WINNING_LINES) {
    const [a, b, c] = line;

    if (board[a] !== null && board[a] === board[b] && board[a] === board[c]) {
      setWinner(board[a])
      return board[a];
    }
  }
  return null;
};

export const afterUserTurn = (turn, setTurn, setBoard, setWinner, winner) => {
  if (turn === "USER-TURN") {
    setTurn("COMPUTER-TURN");

    setTimeout(() => {
      // Opções de escolhas do computador
      const pcOptions = [0, 1, 2, 3, 4, 5, 6, 7, 8];

      let pcChoice = pcOptions[Math.floor(Math.random() * pcOptions.length)];
      let sort = null;

      console.log("O computador escolheu!", pcChoice);
        setBoard((prevBoard) => {
          const newBoard = [...prevBoard];
            if (newBoard[0] === "X" && newBoard[1] === "X" && newBoard[2] === null) {
              sort = pcOptions[Math.floor(Math.random() * 2)];
              sort === 1
                ? (pcChoice = 2)
                : (pcChoice = pcOptions[Math.floor(Math.random() * pcOptions.length)]);
              checkWinner(newBoard, setWinner);
            } else if (
              (newBoard[3] === "O" && newBoard[6] === "O") ||
              (newBoard[1] === "O" && newBoard[2] === "O") ||
              (newBoard[4] === "O" && newBoard[8] === "O")
            ) {
              pcChoice = 0;
              checkWinner(newBoard, setWinner);
            } else if (
              (newBoard[0] === "O" && newBoard[2] === "O") ||
              (newBoard[4] === "O" && newBoard[7] === "O") ||
              (newBoard[4] === "O" && newBoard[8] === "O")
            ) {
              pcChoice = 1;
              checkWinner(newBoard, setWinner);
            } else if (
              (newBoard[0] === "O" && newBoard[1] === "O") ||
              (newBoard[5] === "O" && newBoard[8] === "O") ||
              (newBoard[6] === "O" && newBoard[4] === "O")
            ) {
              pcChoice = 2;
              checkWinner(newBoard, setWinner);
            } else if (
              (newBoard[0] === "O" && newBoard[6] === "O") ||
              (newBoard[4] === "O" && newBoard[5] === "O")
            ) {
              pcChoice = 3;
              checkWinner(newBoard, setWinner);
            } else if (
              (newBoard[3] === "O" && newBoard[5] === "O") ||
              (newBoard[1] === "O" && newBoard[7] === "O") ||
              (newBoard[6] === "O" && newBoard[2] === "O") ||
              (newBoard[0] === "O" && newBoard[8] === "O")
            ) {
              pcChoice = 4;
              checkWinner(newBoard, setWinner);
            } else if (
              (newBoard[2] === "O" && newBoard[8] === "O") ||
              (newBoard[3] === "O" && newBoard[4] === "O")
            ) {
              pcChoice = 5;
              checkWinner(newBoard, setWinner);
            } else if (
              (newBoard[0] === "O" && newBoard[3] === "O") ||
              (newBoard[7] === "O" && newBoard[8] === "O") ||
              (newBoard[4] === "O" && newBoard[2] === "O")
            ) {
              pcChoice = 6;
              checkWinner(newBoard, setWinner);
            } else if (
              (newBoard[6] === "O" && newBoard[8] === "O") ||
              (newBoard[1] === "O" && newBoard[4] === "O")
            ) {
              pcChoice = 7;
              checkWinner(newBoard, setWinner);
            } else if (
              (newBoard[2] === "O" && newBoard[5] === "O") ||
              (newBoard[6] === "O" && newBoard[7] === "O") ||
              (newBoard[0] === "O" && newBoard[4] === "O")
            ) {
              pcChoice = 8;
              checkWinner(newBoard, setWinner);
            } else if (winner) {
              alert("gg");
            } else {
              const empty = prevBoard
                .map((v, i) => (v === null ? i : null))
                .filter((v) => v !== null);
              pcChoice = empty[Math.floor(Math.random() * empty.length)];
              checkWinner(newBoard, setWinner);
            }


          newBoard[pcChoice] = "O";
          return newBoard;
        });

      setTurn("USER-TURN");
      console.log(winner);
    }, 1500);
  } else {
    setTurn("USER-TURN");
  }
};
