import { afterUserTurn } from "./logic";
import { useGameLogic } from "../../store/useGameLogic";

const TicTacToe = () => {
  const { board, turn, setBoard, setTurn } = useGameLogic();

  return (
    <div className="h-screen w-[100%] flex justify-center items-center">
      <div className="grid grid-rows-3 grid-cols-3 gap-[4em]">
        {board.map((a, index) => (
          <span
            key={index}
            className="border-4 border-black h-16 w-16 justify-center items-center flex cursor-pointer"
            disabled={turn !== "USER-TURN"}
            onClick={() => {
              if (turn === "USER-TURN") {
                const newBoard = [...board];
                if (newBoard[index] !== null) {
                  return;
                }
                newBoard[index] = "X";
                setBoard(newBoard);
                afterUserTurn(turn, setTurn, setBoard);
              } else {
                return;
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
