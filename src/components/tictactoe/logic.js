import { useState } from "react";

// Estados das casas do jogo e dos turnos armazenados
export function useGameLogic() {
  const [board, setBoard] = useState([null, null, null, null, null, null, null, null, null]);
  const [turn, setTurn] = useState("USER-TURN");

  return { board, setBoard, turn, setTurn };
}

export const afterUserTurn = (turn, setTurn, setBoard) => {
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

        if (
          newBoard[0] === "X" &&
          newBoard[1] === "X" &&
          newBoard[2] === null
        ) {
          sort = pcOptions[Math.floor(Math.random() * 2)];
          sort === 1
            ? (pcChoice = 2)
            : (pcChoice = pcOptions[Math.floor(Math.random() * pcOptions.length)]);
        } else if (
          newBoard[4] === null
        ) {

           sort = pcOptions[Math.floor(Math.random() * 2)];
          sort === 1
            ? (pcChoice = 4)
            : (pcChoice = pcOptions[Math.floor(Math.random() * pcOptions.length)]);
        } else if (
          (newBoard[3] === "O" && newBoard[6] === "O") ||
          (newBoard[1] === "O" && newBoard[2] === "O") ||
          (newBoard[4] === "O" && newBoard[8] === "O") 
        ) {
          pcChoice = 0;
        } else if (
          (newBoard[0] === "O" && newBoard[2] === "O") ||
          (newBoard[4] === "O" && newBoard[7] === "O") ||
          (newBoard[4] === "O" && newBoard[8] === "O") 
        ) {
          pcChoice = 1
        } else if (
          (newBoard[0] === "O" && newBoard[1] === "O") ||
          (newBoard[5] === "O" && newBoard[8] === "O") ||
          (newBoard[6] === "O" && newBoard[4] === "O")
        ) {
          pcChoice = 2
        } else if (
          (newBoard[0] === "O" && newBoard[6] === "O") ||
          (newBoard[4] === "O" && newBoard[5] === "O")
        ) {
          pcChoice = 3
        } else if (
          (newBoard[3] === "O" && newBoard[5] === "O") ||
          (newBoard[1] === "O" && newBoard[7] === "O") ||
          (newBoard[6] === "O" && newBoard[2] === "O") ||
          (newBoard[0] === "O" && newBoard[8] === "O")
        ) {
          pcChoice = 4
        } else if (
          (newBoard[2] === "O" && newBoard[8] === "O") ||
          (newBoard[3] === "O" && newBoard[4] === "O")
        ) {
          pcChoice = 5
        } else if (
          (newBoard[0] === "O" && newBoard[6] === "O") ||
          (newBoard[7] === "O" && newBoard[8] === "O") ||
          (newBoard[4] === "O" && newBoard[2] === "O")
        ) {
          pcChoice = 6
        } else if (
          (newBoard[6] === "O" && newBoard[8] === "O") ||
          (newBoard[1] === "O" && newBoard[4] === "O")
        ) {
          pcChoice = 7
        } else if (
          (newBoard[2] === "O" && newBoard[5] === "O") ||
          (newBoard[6] === "O" && newBoard[7] === "O") ||
          (newBoard[0] === "O" && newBoard[4] === "O")
        ) {
          pcChoice = 8
        } else {
          pcChoice = pcOptions[Math.floor(Math.random() * pcOptions.length)]
        }
        
        if (!([newBoard[pcChoice] !== null])) {
          newBoard[pcChoice] = "O"
        } else {
          pcChoice = pcOptions[Math.floor(Math.random() * pcOptions.length)]
          newBoard[pcChoice] = "O"
        };
        return newBoard;
      });

      setTurn("USER-TURN");
      console.log(turn);
    }, 1500);
  } else {
    setTurn("USER-TURN");
  }
};
