import { useState, Activity, useEffect } from "react";
import { useGameLogic } from "../../store/useGameLogic";

import { HiArrowNarrowDown } from "react-icons/hi";

import paperImg from "../../assets/paper.png";
import stoneImg from "../../assets/stone.png";
import scissorsImg from "../../assets/scissors.png";

import startButton from "../../assets/start-jokenpo.png"

import closedHand from "../../assets/closed-hand.png"
import paperHand from "../../assets/hand-paper.png"
import scissorsHand from "../../assets/hand-scissors.png"


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
    <section className="flex flex-col justify-center items-center h-screen bg-cover bg-center bg-[url('/images/mobile-jokenpo-bg.jpg')] lg:bg-[url('/images/pc-jokenpo-bg-full.jpg')] w-full">
      {/* Seção inicial do jogo */}
      <Activity mode={isPlaying ? "hidden" : "visible"}>
        <div className="flex flex-col justify-center items-center h-screen w-full bg-cover bg-center">
          <button
            type="button"
            className="cursor-pointer mb-[4em] font-medium absolute top-0"
            onClick={() => setIsPlaying(true)}
          >
            <img src={startButton} alt="w-16 h-16" className="w-128 h-128 hover:brightness-115" />
          </button>
          <div className="flex">
            <img
              src={scissorsImg}
              alt="Scissors"
              className="w-24 h-24 translate-y-63 translate-x-15 brightness-50"
            />
            <img src={paperImg} alt="Paper" className="w-36 h-32 translate-y-40 brightness-50" />
            <img
              src={stoneImg}
              alt="Stone"
              className="w-24 h-24 translate-y-57 -translate-x-15 brightness-50"
            />
          </div>
        </div>
      </Activity>
      {/* Quando o usuário clicar em "JOGAR", o mesmo irá escolher as opções */}
      <Activity mode={isPlaying && !playerChoice ? "visible" : "hidden"}>
        <div className="flex flex-col justify-around items-center h-[100%] w-full bg-[url('/images/mobile-jokenpo-bg.jpg')] lg:bg-[url('/images/pc-jokenpo-bg.jpg')] bg-cover bg-center">
          <h2 className="text-[2.4em] font-sans font-bold text-[#FFF] translate-y-6">FAÇA A SUA ESCOLHA!</h2>
          <div className="flex">
            {/* Escolhas */}
            <button type="button" className="cursor-pointer" onClick={() => setChoice("Scissors")}>
              <img
                src={scissorsImg}
                alt="Scissors"
                className="w-24 h-24 translate-y-24 translate-x-15 hover:brightness-150"
              />
            </button>
            <button type="button" className="cursor-pointer" onClick={() => setChoice("Paper")}>
              <img
                src={paperImg}
                alt="Paper"
                className="w-36 h-32 hover:brightness-150 translate-y-5"
              />
            </button>
            <button type="button" className="cursor-pointer" onClick={() => setChoice("Stone")}>
              <img
                src={stoneImg}
                alt="Stone"
                className="w-24 h-24 hover:brightness-150 translate-y-18 -translate-x-15"
              />
            </button>
          </div>
        </div>
      </Activity>
      {/* Após a escolha do usuário */}
      <Activity mode={isPlaying && playerChoice ? "visible" : "hidden"}>
        <div className="flex flex-col gap-12 justify-around items-center h-[100%] w-full bg-[url('/images/mobile-jokenpo-bg.jpg')] lg:bg-[url('/images/pc-jokenpo-bg.jpg')] bg-cover bg-center">
          {showMessage && (
            <div className="absolute top-[55%] left-[35%] flex flex-col justify-center items-center w-[15em] h-[6em]">
            <h2 className="text-[#FFF] font-bold font-sans font-[2em]">
              Sua escolha foi{" "}
              {playerChoice === "Stone" ? "pedra" : playerChoice === "Paper" ? "papel" : "tesoura"}!
            </h2>
            <HiArrowNarrowDown className="w-16 h-16 text-[#FFF] text-center"/> 
            </div>
          )}
          <div className="flex gap-16 translate-y-50">
            <span>
              {runner ? (
                <img
                  src={closedHand}
                  alt="Choosing..."
                  className="h-26 w-30 scale-x-[-1] animate-bounce"
                />
              ) : (
                <img
                  src={playerChoice === "Stone" ? closedHand : playerChoice === "Paper" ? paperHand : scissorsHand}
                  alt="Choosing..."
                  className="h-26 w-30 scale-x-[-1]"
                />
              )}
            </span>
            <span>
              {runner ? (
                <img src={closedHand} alt="Choosing..." className="h-26 w-30 animate-bounce" />
              ) : (
                 <img
                  src={computerChoice === "Stone" ? closedHand : computerChoice === "Paper" ? paperHand : scissorsHand}
                  alt="Choosing..."
                  className="h-26 w-30"
                />
              )}
            </span>
          </div>
          <div className="absolute top-[20%]">
            <div className="flex flex-col justify-center items-center gap-8">
              <span className="text-[2.4em] font-sans font-bold text-[#FFF] translate-y-2">
                {runner
                  ? null
                  : winner === "USER"
                    ? "VOCÊ VENCEU!"
                    : winner === "COMPUTER"
                      ? "O COMPUTADOR VENCEU!"
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
