import { useState } from "react";

export function useGameLogic() {
  const [board, setBoard] = useState([null, null, null, null, null, null, null, null, null]);
  const [turn, setTurn] = useState("USER-TURN");

  return { board, setBoard, turn, setTurn };
}

export const afterUserTurn = (turn, setTurn, setBoard) => {
  if (turn === "USER-TURN") {
    setTurn("COMPUTER-TURN");

    setTimeout(() => {
      const pcOptions = [0, 1, 2, 3, 4, 5, 6, 7, 8];

      let pcChoice = pcOptions[Math.floor(Math.random() * pcOptions.length)];
      let sort = null

      console.log("O computador escolheu!", pcChoice);

      setBoard((prevBoard) => {
        const newBoard = [...prevBoard];

        if (newBoard[0] === "X" && newBoard[1] === "X" && newBoard[2] === null) {
          sort = pcOptions[Math.floor(Math.random() * 2)];
          sort === 1 ? pcChoice = 2 : pcChoice = pcOptions[Math.floor(Math.random() * pcOptions.length)] ;
        } else if (newBoard[0] === "X" && newBoard[3] === "X" && newBoard[6] === null) {
          pcChoice = 6;
        } else {
          pcChoice = pcOptions[Math.floor(Math.random() * pcOptions.length)];
        }
        newBoard[pcChoice] = "O";
        return newBoard;
      });

      setTurn("USER-TURN");
      console.log(turn);
    }, 2000);
  } else {
    setTurn("USER-TURN");
  }
};
