import { useState, useEffect } from "react";

const TicTacToe = () => {
  const [board, setBoard] = useState([null, null, null, null, null, null, null, null, null]);
  const [turn, setTurn] = useState("USER-TURN");

  const afterUserTurn = () => {
    if (turn === "USER-TURN") {
      setTurn("COMPUTER-TURN");

        setTimeout(() => {

        const pcOptions = [0, 1, 2, 3, 4, 5, 6, 7, 8];

        const pcChoice = pcOptions[Math.floor(Math.random() * pcOptions.length)];

        console.log("O computador escolheu!", pcChoice);

    
        setBoard(prevBoard => {
        const newBoard = [...prevBoard];
        newBoard[pcChoice] = "O";
        return newBoard
        });

        setTurn("USER-TURN");
        console.log(turn);
      }, 4000);

    } else {
      setTurn("USER-TURN");
    }
  };

  return (
    <div className="h-screen w-[100%] flex justify-center items-center">
      <div className="grid grid-rows-3 grid-cols-3 gap-[4em]">
        {board.map((a, index) => (
          <span
            key={index}
            className="border-4 border-black h-16 w-16 justify-center items-center flex cursor-pointer"
            onClick={() => {
                if(turn === "USER-TURN") {
                const newBoard = [...board];
                 newBoard[index] = "X";
                 setBoard(newBoard);
                 afterUserTurn();
                } else {
                    return 
                }
            }}
          >
            {a}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TicTacToe;
