import { Activity } from "react";
import { useGameLogic } from "../../store/useGameLogic";
import { checkWinner, endGame, afterUserTurn } from "./logic";
import { useEffect } from "react";

const TicTacToe = () => {
  const { board, turn, setBoard, setTurn, isPlaying, setIsPlaying } = useGameLogic();

  const reset = () => {
    setBoard([null, null, null, null, null, null, null, null, null])
    let sort = ["USER-TURN", "COMPUTER-TURN"]
    setTurn(sort[Math.floor(Math.random() * sort.length)])
    setIsPlaying(true)
  }

  // Toda vez que o board mudar, verificamos o vencedor + turno
  useEffect(() => {
    const winner = checkWinner(board);

    if (!winner && !board.includes(null)) {
         console.log("Empate")
         endGame(setTurn, winner, setIsPlaying)
         return
      }

    if (winner) {
      console.log("O resultado é: " + winner);
      endGame(setTurn, winner, setIsPlaying);
      return;
    }

    // Se não há vencedor e é turno do computador → computador joga
    if (turn === "COMPUTER-TURN") {
      afterUserTurn(turn, setTurn, setBoard, board, setIsPlaying);
    }
  }, [board, turn, setTurn, setBoard]);

  return (
    <div className="h-screen w-[100%] flex justify-center items-center flex-col">
      <Activity mode={isPlaying ? "hidden" : "visible"}>
        <button type="button" onClick={reset}>Jogar novamente</button>
      </Activity>
      <div className="grid grid-rows-3 grid-cols-3 gap-[4em]">
        {board.map((cell, index) => (
          <span
            key={index}
            className="border-4 border-black h-16 w-16 justify-center items-center flex cursor-pointer"
            onClick={() => {
              if (turn !== "USER-TURN" || !isPlaying) return;
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
