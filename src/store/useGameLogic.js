import { useState } from "react";

// Estados das casas do jogo e dos turnos armazenados
export function useGameLogic() {
  const [board, setBoard] = useState([null, null, null, null, null, null, null, null, null]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [turn, setTurn] = useState("USER-TURN");

  return { board, setBoard, turn, setTurn, isPlaying, setIsPlaying };
}
