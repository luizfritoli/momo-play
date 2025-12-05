import { WINNING_LINES } from "./logic";

export const setPcChoice = (newBoard) => {

  // Percorrer todos os ARRAY que permitem vitória
  for (const [a, b, c] of WINNING_LINES) {
      // Capturados todos valores dos INDEX que permitem vitória
      const values = [newBoard[a], newBoard[b], newBoard[c]];
  
      // ANÁLISE das casas onde tem o "X" (Usuário)
      const adversaryCount = values.filter((v) => v === "X").length;
       // ANÁLISE das casas onde tem o "O" (PC)
      const pcCount = values.filter((v) => v === "O").length;
       // ANÁLISE das casas onde não há nada
      const emptyCount = values.filter((v) => v === null).length;
  
      // Se o COMPUTADOR tiver 2 casas preenchidas e faltar 1 para vencer
      if (pcCount === 2 && emptyCount === 1) {
        // O PC acha a casa para vencer
        const empty = [a, b, c].find((i) => newBoard[i] === null);
        return empty;
      }

      // Se o USUÁRIO tiver 2 casas preenchidas e faltar 1 para vencer
      if (adversaryCount === 2 && emptyCount === 1) {
        // O PC acha a casa para bloquear
        const empty = [a, b, c].find((i) => newBoard[i] === null);
        return empty;
      }
    }
};

export const randomChoice = () => {
  const pcOptions = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  let pcChoice;

  pcChoice = pcOptions[Math.floor(Math.random() * pcOptions.length)];

  return pcChoice;
};
