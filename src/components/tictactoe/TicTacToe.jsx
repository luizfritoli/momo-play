import { useGameLogic } from "../../store/useGameLogic";
import { checkWinner, endGame, afterUserTurn } from "./logic";
import { useEffect } from "react";

const TicTacToe = () => {
  const { board, turn, setBoard, setTurn } = useGameLogic();

  // Toda vez que o board mudar, verificamos o vencedor + turno
  useEffect(() => {
    const winner = checkWinner(board);

    if (winner) {
      console.log("O resultado é: " + winner);
      endGame(setTurn, winner);
      return;
    }

    // Se não há vencedor e é turno do computador → computador joga
    if (turn === "COMPUTER-TURN") {
      afterUserTurn(turn, setTurn, setBoard, board);
    }
  }, [board, turn, setTurn, setBoard]);

  return (
    <div className="h-screen w-[100%] flex justify-center items-center">
      <div className="grid grid-rows-3 grid-cols-3 gap-[4em]">
        {board.map((cell, index) => (
          <span
            key={index}
            className="border-4 border-black h-16 w-16 justify-center items-center flex cursor-pointer"
            onClick={() => {
              if (turn !== "USER-TURN") return;

              setBoard((prev) => {
                if (prev[index] !== null) return prev;

                const newBoard = [...prev];
                newBoard[index] = "X";

                setTurn("COMPUTER-TURN");
                return newBoard;
              });
            }}
          >
            {cell}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TicTacToe;
