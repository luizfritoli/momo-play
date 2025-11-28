import { useState } from "react";

// Estados das casas do jogo e dos turnos armazenados
export function useGameLogic() {
  const [board, setBoard] = useState([null, null, null, null, null, null, null, null, null]);
  const [turn, setTurn] = useState("USER-TURN");
  const [winner, setWinner] = useState(null);

  return { board, setBoard, turn, setTurn, winner, setWinner };
}
