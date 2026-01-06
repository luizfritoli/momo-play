import { useState, Activity, useEffect } from "react";
import { useGameLogic } from "../../store/useGameLogic";

import paperImg from "../../assets/jokenpo-assets/paper.png";
import stoneImg from "../../assets/jokenpo-assets/stone.png";
import scissorsImg from "../../assets/jokenpo-assets/scissors.png";

import startButton from "../../assets/jokenpo-assets/start-jokenpo.png";

import closedHand from "../../assets/jokenpo-assets/closed-hand.png";
import paperHand from "../../assets/jokenpo-assets/hand-paper.png";
import scissorsHand from "../../assets/jokenpo-assets/hand-scissors.png";

import Return from "../menu-components/Return";

const Jokenpo = () => {
  // Começar a partida pela escolha
  const { isPlaying, setIsPlaying } = useGameLogic();

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
    }, 3500);

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
    <section className="select-none flex flex-col justify-center items-center h-screen bg-cover bg-center bg-[url('/images/mobile-jokenpo-bg-full.jpg')] lg:bg-[url('/images/pc-jokenpo-bg-full.jpg')] w-full">
      {/* Seção inicial do jogo */}
      <Activity mode={isPlaying ? "hidden" : "visible"}>
        <div className="flex flex-col justify-center items-center h-screen w-full bg-cover bg-center">
          {/* Retornar a tela principal */}
          <Return />
          <button
            type="button"
            className="cursor-pointer mb-[4em] font-medium left-9 lg:left-0 absolute top-0 lg:translate-y-12"
            onClick={() => setIsPlaying(true)}
          >
            <img
              src={startButton}
              alt="Start Button"
              className="w-128 h-128 hover:brightness-115"
            />
          </button>
          <div className="flex">
            <img
              src={scissorsImg}
              alt="Scissors"
              className="w-24 h-24 md:w-28 md:h-28 lg:w-24 lg:h-24 translate-y-60 translate-x-5 md:translate-y-70 lg:translate-y-55 lg:translate-x-15 xl:translate-y-63 xl:translate-x-15 brightness-50"
            />
            <img
              src={paperImg}
              alt="Paper"
              className="w-36 h-32 md:w-40 md:h-36 translate-y-40 -translate-x-7 md:translate-y-45 md:-translate-x-14 lg:translate-y-35 lg:translate-x-1 xl:translate-x-1 xl:translate-y-40 brightness-50"
            />
            <img
              src={stoneImg}
              alt="Stone"
              className="w-24 h-24 md:w-28 md:h-28 translate-y-55 -translate-x-17 md:translate-y-70 md:-translate-x-30 lg:translate-y-54 lg:-translate-x-19 xl:translate-y-57 xl:-translate-x-15 brightness-50"
            />
          </div>
        </div>
      </Activity>
      {/* Quando o usuário clicar em "JOGAR", o mesmo irá escolher as opções */}
      <Activity mode={isPlaying && !playerChoice ? "visible" : "hidden"}>
        <div className="flex flex-col justify-around items-center h-[100%] w-full bg-[url('/images/mobile-jokenpo-bg.jpg')] lg:bg-[url('/images/pc-jokenpo-bg.jpg')] bg-cover bg-center">
          <h2 className="text-[2.4em] text-center font-bold text-[#EFEF03] lg:translate-y-6">
            FAÇA A SUA ESCOLHA!
          </h2>
          <div className="flex">
            {/* Escolhas */}
            <button type="button" className="cursor-pointer" onClick={() => setChoice("Scissors")}>
              <img
                src={scissorsImg}
                alt="Scissors"
                className="w-24 h-24 md:w-30 md:h-30 lg:h-24 lg:w-24 xl:w-24 xl:h-24 translate-x-5 lg:translate-y-18 lg:translate-x-15 xl:translate-y-23 xl:translate-x-15 hover:brightness-150"
              />
            </button>
            <button type="button" className="cursor-pointer" onClick={() => setChoice("Paper")}>
              <img
                src={paperImg}
                alt="Paper"
                className="w-36 h-32 md:w-40 md:h-36 -translate-y-16 -translate-x-7 lg:translate-y-4 lg:translate-x-1 hover:brightness-150 xl:translate-y-6 xl:translate-x-1"
              />
            </button>
            <button type="button" className="cursor-pointer" onClick={() => setChoice("Stone")}>
              <img
                src={stoneImg}
                alt="Stone"
                className="w-24 h-24 md:w-28 md:h-28 -translate-y-5 -translate-x-17 lg:translate-y-17 hover:brightness-150 xl:translate-y-18 xl:-translate-x-14"
              />
            </button>
          </div>
        </div>
      </Activity>
      {/* Após a escolha do usuário */}
      <Activity mode={isPlaying && playerChoice ? "visible" : "hidden"}>
        <div className="flex flex-col gap-12 justify-around items-center h-[100%] w-full bg-[url('/images/mobile-jokenpo-bg.jpg')] lg:bg-[url('/images/pc-jokenpo-bg.jpg')] bg-cover bg-center">
          {showMessage && (
            <div className="absolute bottom-0 md:right-[45%] md:bottom-[20%] lg:bottom-3 xl:bottom-[1%] right-[40%] xl:left-[35%] flex flex-col justify-center items-center w-[15em] h-[6em]">
              <HiArrowNarrowUp className="w-16 h-16 text-[#A7E63A] lg:text-[3em] text-center" />
              <h2 className="text-[#A7E63A] font-semibold lg:text-[1.5em] text-center xl:text-[0.8em] text-[1.3em]">
                Sua escolha foi{" "}
                {playerChoice === "Stone"
                  ? "pedra"
                  : playerChoice === "Paper"
                    ? "papel"
                    : "tesoura"}
                !
              </h2>
            </div>
          )}
          <div className="flex gap-16 translate-y-40 lg:translate-y-40">
            <span>
              {runner ? (
                <img
                  src={closedHand}
                  alt="Choosing..."
                  className="h-26 w-30 md:h-34 md:w-38 lg:h-26 lg:w-30 scale-x-[-1] animate-bounce"
                />
              ) : (
                <img
                  src={
                    playerChoice === "Stone"
                      ? closedHand
                      : playerChoice === "Paper"
                        ? paperHand
                        : scissorsHand
                  }
                  alt="Choosing..."
                  className="h-26 w-30 md:h-34 md:w-38 lg:h-26 lg:w-30 scale-x-[-1]"
                />
              )}
            </span>
            <span>
              {runner ? (
                <img
                  src={closedHand}
                  alt="Choosing..."
                  className="h-26 w-30 md:h-34 md:w-38 lg:h-26 lg:w-30 animate-bounce"
                />
              ) : (
                <img
                  src={
                    computerChoice === "Stone"
                      ? closedHand
                      : computerChoice === "Paper"
                        ? paperHand
                        : scissorsHand
                  }
                  alt="Choosing..."
                  className="h-26 w-30 md:h-34 md:w-38 lg:h-26 lg:w-30"
                />
              )}
            </span>
          </div>
          <div className="absolute top-[20%]">
            <div className="flex flex-col justify-center items-center gap-8">
              <span className="text-[2.4em] font-bold text-center text-[#EFEF03] translate-y-2">
                {runner
                  ? null
                  : winner === "USER"
                    ? "VOCÊ VENCEU!"
                    : winner === "COMPUTER"
                      ? "O PC VENCEU!"
                      : "EMPATE!!"}
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
