import { useState, Activity, useEffect } from "react";

const Jokenpo = () => {
  // Começar a partida pela escolha
  const [isPlaying, setIsPlaying] = useState(false);

  // Armazenar as escolhas do computador e do usuário
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);

  const [runner, setRunner] = useState(false);

  // Mostrar e destruir a mensagem de escolha do usuário
  const [showMessage, setShowMessage] = useState(false);

  const [winner, setWinner] = useState(null);

  const setChoice = (choice) => {
    // Após a escolha, mostrar a mensagem de confirmação da mesma
    setShowMessage(true);

    // Escolha do computador
    const options = ["Stone", "Paper", "Scissors"];
    const calcPcChoice = options[Math.floor(Math.random() * options.length)];

    // Condições de vitória
    if (
      (choice === "Stone" && calcPcChoice === "Scissors") ||
      (choice === "Paper" && calcPcChoice === "Stone") ||
      (choice === "Scissors" && calcPcChoice === "Paper")
    ) {
      setWinner("USER");
    } else if (choice === calcPcChoice) {
      setWinner("TIE");
    } else {
      setWinner("COMPUTER");
    }

    setPlayerChoice(choice);
    setComputerChoice(calcPcChoice);
    console.log(`${choice} | ${calcPcChoice}`);

    setRunner(true);
  };

  // Resetar tudo ao jogar novamente
  const playAgain = () => {
    setPlayerChoice(null);
    setComputerChoice(null);
    setWinner(null);
    setIsPlaying(false);
  };

  // UI da partida
  useEffect(() => {
    const handler = setTimeout(() => {
      setRunner(false);
    }, 4000);

    return () => clearTimeout(handler);
  }, [runner]);

  // Visibilidade do texto de escolha
  useEffect(() => {
    const visibility = setTimeout(() => {
      setShowMessage(false);
    }, 3000);

    return () => clearTimeout(visibility);
  }, [showMessage]);
  return (
    <section className="flex flex-col justify-center items-center h-screen w-full">
      {/* Seção inicial do jogo */}
      <Activity mode={isPlaying ? "hidden" : "visible"}>
        <div className="flex flex-col justify-center items-center h-[100%] w-full bg-green-700">
          <button
            type="button"
            className="bg-green-600 text-[2.5em] p-3 cursor-pointer rounded-lg w-[6em] 
            mb-[4em] text-[#FFF] font-medium"
            onClick={() => setIsPlaying(true)}
          >
            JOGAR
          </button>
        </div>
      </Activity>
      {/* Quando o usuário clicar em "JOGAR" */}
      <Activity mode={isPlaying && !playerChoice ? "visible" : "hidden"}>
        <div className="flex flex-col justify-around items-center h-[100%] w-full bg-neutral-700">
          <h2 className="text-[2em] text-[#FFF] font-semibold">FAÇA A SUA ESCOLHA!</h2>
          <div className="flex flex-row gap-12 justify-center items-center">
            {/* Escolhas */}
            <button type="button" className="cursor-pointer" onClick={() => setChoice("Stone")}>
              Pedra
            </button>
            <button type="button" className="cursor-pointer" onClick={() => setChoice("Paper")}>
              Papel
            </button>
            <button type="button" className="cursor-pointer" onClick={() => setChoice("Scissors")}>
              Tesoura
            </button>
          </div>
        </div>
      </Activity>
      {/* Após a escolha do usuário */}
      <Activity mode={isPlaying && playerChoice ? "visible" : "hidden"}>
        <div className="flex flex-col gap-12 justify-around items-center h-[100%] w-full bg-violet-300">
          {showMessage && (
            <h2 className="absolute top-[40%]">
              Sua escolha foi{" "}
              {playerChoice === "Stone" ? "pedra" : playerChoice === "Paper" ? "papel" : "tesoura"}!
            </h2>
          )}
          <div className="flex gap-12">
            <span>{runner ? "Escolhendo..." : playerChoice}</span>
            <span>VS</span>
            <span>{runner ? "Escolhendo..." : computerChoice}</span>
          </div>
          <div className="absolute top-[20%]">
            <div className="flex flex-col justify-center items-center gap-8">
              <span className="text-[2.4em]">
                {runner
                  ? null
                  : winner === "USER"
                    ? "Você venceu!"
                    : winner === "COMPUTER"
                      ? "O computador venceu!"
                      : "Empate!"}
              </span>
              {!runner && winner && (
                <button
                  className="text-[1.1em] bg-[#A7E63A] rounded-lg font-medium p-3 cursor-pointer"
                  onClick={playAgain}
                >
                  Jogar novamente
                </button>
              )}
            </div>
          </div>
        </div>
      </Activity>
    </section>
  );
};

export default Jokenpo;
