import { randomChoice, setPcChoice } from "./pcChoice";

export const WINNING_LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export const endGame = (setTurn, setIsPlaying) => {
  setTurn(null);
  setIsPlaying(false);
};

export const checkWinner = (board, winner) => {
  // Captura todas as possibilidades de vitória
  for (const line of WINNING_LINES) {
    // Desestruturação dos INDEX
    const [a, b, c] = line;

    // Verificação se todos os INDEX são iguais, assim, validando a vitória
    if (board[a] !== null && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }

  if (!winner && !board.includes(null)) {
    return "DRAW";
  }
  return null;
};

export const afterUserTurn = (turn, setTurn, setBoard, board, setIsPlaying) => {
  let winner = null;
  winner = checkWinner(board);
  if (winner) {
    setTurn(null);
    endGame(setTurn, winner, setIsPlaying);
    return;
  }
  if (turn === "COMPUTER-TURN") {
    // Opções de 8 casas do TicTaeToe para escolha aleatória
    const pcOptions = [0, 1, 2, 3, 4, 5, 6, 7, 8];

    setTimeout(() => {
      setBoard((prevBoard) => {
        // Cópia do tabuleiro principal para modificação
        const newBoard = [...prevBoard];
        let pcChoice = setPcChoice(newBoard);

        // Se o computador fizer uma escolha inválida
        if (pcChoice > 8 && pcChoice < 0) {
          pcChoice = pcOptions[Math.floor(Math.random() * pcOptions.length)];
        }

        // ENQUANTO o computador escolher um INDEX null
        while (newBoard[pcChoice] !== null) {
          pcChoice = randomChoice();
        }

        // DEFINE a escolha do PC
        newBoard[pcChoice] = "O";

        // Sem vencedor: turno do usuário
        if (!winner) {
          setTurn("USER-TURN");
        }

        return newBoard;
      });
    }, 400);
  }
};
