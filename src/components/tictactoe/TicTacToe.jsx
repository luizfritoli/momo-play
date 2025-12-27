import { Activity, useEffect } from "react";

import { useGameLogic } from "../../store/useGameLogic";
import { checkWinner, endGame, afterUserTurn } from "./logic";

import Return from "../menu-components/Return";

const TicTacToe = () => {
  const { board, turn, setBoard, setTurn, isPlaying, setIsPlaying } = useGameLogic();

  const reset = () => {
    setBoard([null, null, null, null, null, null, null, null, null]);
    let sort = ["USER-TURN", "COMPUTER-TURN"];
    setTurn(sort[Math.floor(Math.random() * sort.length)]);
    setIsPlaying(true);
  };

  // Toda vez que o board mudar, verificamos o vencedor + turno
  useEffect(() => {
    // Analisar SE HÁ um vendor
    const winner = checkWinner(board);

    // Se NÃO HÁ vencedor e nem espaço na tabela
    if (!winner && !board.includes(null)) {
      endGame(setTurn, setIsPlaying);
      checkWinner(board, winner);
      return;
    }

    // Se EXISTIR um vencedor
    if (winner) {
      endGame(setTurn, setIsPlaying);
      return;
    }

    // Vez do computador
    if (turn === "COMPUTER-TURN") {
      afterUserTurn(turn, setTurn, setBoard, board, setIsPlaying);
    }
  }, [board, turn, setTurn, setBoard]);

  return (
    <section className="h-screen w-[100%] flex justify-center items-center flex-col">
     {/* Retornar a tela principal */}  
       <Return />
      <Activity mode={isPlaying ? "hidden" : "visible"}>
        {checkWinner(board) === "X"
          ? "Você venceu!"
          : checkWinner(board) === "O"
            ? "O computador venceu!"
            : checkWinner(board) === "DRAW"
              ? "Empate"
              : null}
        <button type="button" onClick={reset}>
          {checkWinner(board) ? "Jogar novamente" : "Jogar"}
        </button>
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
    </section>
  );
};

export default TicTacToe;
