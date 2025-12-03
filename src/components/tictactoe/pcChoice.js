export const setPcChoice = (newBoard) => {
  const pcOptions = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  let pcChoice = null;
  let sort = null;

  if (newBoard[0] === "X" && newBoard[1] === "X" && newBoard[2] === null) {
    sort = pcOptions[Math.floor(Math.random() * 2)];
    sort === 1
      ? (pcChoice = 2)
      : (pcChoice = pcOptions[Math.floor(Math.random() * pcOptions.length)]);
  }

  if (
    (newBoard[3] === "O" && newBoard[6] === "O") ||
    (newBoard[1] === "O" && newBoard[2] === "O") ||
    (newBoard[4] === "O" && newBoard[8] === "O")
  ) {
    pcChoice = 0;
    newBoard[pcChoice] === null
      ? null
      : (pcChoice = pcOptions[Math.floor(Math.random() * pcOptions.length)]);
  }

  if (
    (newBoard[0] === "O" && newBoard[2] === "O") ||
    (newBoard[4] === "O" && newBoard[7] === "O") ||
    (newBoard[4] === "O" && newBoard[8] === "O")
  ) {
    pcChoice = 1;
    newBoard[pcChoice] === null
      ? (pcChoice = pcOptions[Math.floor(Math.random() * pcOptions.length)])
      : null;
  }

  if (
    (newBoard[0] === "O" && newBoard[1] === "O") ||
    (newBoard[5] === "O" && newBoard[8] === "O") ||
    (newBoard[6] === "O" && newBoard[4] === "O")
  ) {
    pcChoice = 2;
    newBoard[pcChoice] === null
      ? (pcChoice = pcOptions[Math.floor(Math.random() * pcOptions.length)])
      : null;
  }

  if (
    (newBoard[0] === "O" && newBoard[6] === "O") ||
    (newBoard[4] === "O" && newBoard[5] === "O")
  ) {
    pcChoice = 3;
    newBoard[pcChoice] === null
      ? (pcChoice = pcOptions[Math.floor(Math.random() * pcOptions.length)])
      : null;
  }

  if (
    (newBoard[3] === "O" && newBoard[5] === "O") ||
    (newBoard[1] === "O" && newBoard[7] === "O") ||
    (newBoard[6] === "O" && newBoard[2] === "O") ||
    (newBoard[0] === "O" && newBoard[8] === "O")
  ) {
    pcChoice = 4;
    newBoard[pcChoice] === null
      ? (pcChoice = pcOptions[Math.floor(Math.random() * pcOptions.length)])
      : null;
  }

  if (
    (newBoard[2] === "O" && newBoard[8] === "O") ||
    (newBoard[3] === "O" && newBoard[4] === "O")
  ) {
    pcChoice = 5;
    newBoard[pcChoice] === null
      ? (pcChoice = pcOptions[Math.floor(Math.random() * pcOptions.length)])
      : null;
  }

  if (
    (newBoard[0] === "O" && newBoard[3] === "O") ||
    (newBoard[7] === "O" && newBoard[8] === "O") ||
    (newBoard[4] === "O" && newBoard[2] === "O")
  ) {
    pcChoice = 6;
    newBoard[pcChoice] === null
      ? (pcChoice = pcOptions[Math.floor(Math.random() * pcOptions.length)])
      : null;
  }

  if (
    (newBoard[6] === "O" && newBoard[8] === "O") ||
    (newBoard[1] === "O" && newBoard[4] === "O")
  ) {
    pcChoice = 7;
    newBoard[pcChoice] === null
      ? (pcChoice = pcOptions[Math.floor(Math.random() * pcOptions.length)])
      : null;
  }

  if (
    (newBoard[2] === "O" && newBoard[5] === "O") ||
    (newBoard[6] === "O" && newBoard[7] === "O") ||
    (newBoard[0] === "O" && newBoard[4] === "O")
  ) {
    pcChoice = 8;
    newBoard[pcChoice] === null
      ? (pcChoice = pcOptions[Math.floor(Math.random() * pcOptions.length)])
      : null;
  } else {
    pcChoice = pcOptions[Math.floor(Math.random() * pcOptions.length)];
  }
  return pcChoice;
};

export const randomChoice = () => {
  const pcOptions = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  let pcChoice;

  pcChoice = pcOptions[Math.floor(Math.random() * pcOptions.length)];

  return pcChoice;
};
