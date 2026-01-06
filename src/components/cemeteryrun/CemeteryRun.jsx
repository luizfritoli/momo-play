import { useRef, useEffect, useState } from "react";

import { useRunStore } from "../../store/useRunStore";
import { useGameLogic } from "../../store/useGameLogic";

import objectImg from "../../assets/cemeteryrun-assets/teste2.png";

import "./animation.css"
import "../../main.css";

import ObstacleWatcher from "./logic";
import Return from "../menu-components/Return";

const CemeteryRun = () => {
  // Estados do jogo
  const {
    jump,
    startJump,
    endJump,
    crouch,
    startCrouch,
    endCrouch,
    gameover,
    setGameOver,
    resetGameOver,
  } = useRunStore();
  const { isPlaying, setIsPlaying } = useGameLogic();
  const [counter, setCounter] = useState(0);

  // Declaradas as referências dos objetos interagidos do jogo
  const obPositionRef = useRef(null);
  const obPositionRef2 = useRef(null);
  const characterRef = useRef(null);

  // Função de pulo
  const handleJump = () => {
    if (!isPlaying) return;
    if (jump) return;

    startJump();

    setTimeout(() => {
      endJump();
    }, 300);
  };

  // Contador de pontos do jogo
  useEffect(() => {
    if (!isPlaying) return;

    setCounter(0);

    const handler = setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 100);

    return () => clearInterval(handler);
  }, [isPlaying]);

  // Identificar o pulo e o agacho do personagem
  useEffect(() => {
    const handleKeyDown = (e) => {
      // SE apertado o espaço E o pulando for false
      if (e.code === "Space" && !jump) {
        handleJump();
      }

      // SE apertada a seta para baixo
      if (e.code === "ArrowDown") {
        startCrouch();
      }
    };

    // SE despressionada a seta para baixo
    const handleKeyUp = (e) => {
      if (e.code === "ArrowDown") {
        endCrouch();
      }
    };

    // Capturar os eventos de teclado
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [jump, isPlaying]);

  return (
    <section className="select-none h-screen flex flex-col w-full max-h-[100%] overflow-hidden">
      {/* Início do cenário */}
      <div
        className="h-[80%] bg-violet-500 items-end flex w-full relative"
        onClick={() => {
          if (gameover) return;
          handleJump();
        }}
      >
        {/* Botão de jogar, que será escondido quando isPlaying e gameover for true */}
        {!isPlaying && !gameover && (
          <button
            type="button"
            className="absolute top-0 text-[5em]"
            onClick={() => setIsPlaying(true)}
          >
            Jogar
          </button>
        )}
        {/* Contador de pontos */}
        {isPlaying && (
          <span className="top-[10%] left-1/2 -translate-x-1/2 -translate-y-1/2 absolute text-[4em]">
            {counter}
          </span>
        )}
        {/* Personagem */}
        <div
          className={`transition-all mb-0 pb-0 items-start ml-[4.5%] ease-[cubic-bezier(0.3,0,0.6,1)] duration-100 
      ${jump ? "-translate-y-50 lg:-translate-y-70" : "translate-y-0"} ${crouch ? "bg-green-500 w-10 h-8 lg:w-24 lg:h-22" : "bg-red-500 w-10 h-[13%] lg:w-24 lg:h-32 "}`}
          ref={characterRef}
        ></div>
        {/* Objeto 1 */}
        <div
          className={
            gameover
              ? "obstaculo bg-green-500 h-18 w-12 obstaculo-paused"
              : isPlaying
                ? "obstaculo bg-green-500 h-18 w-12"
                : "hidden"
          }
          ref={obPositionRef}
        ></div>
        {/* Objeto 2 */}
        <div
          className={
            gameover
              ? "obstaculo2 lg:top-[66%] top-[88%] w-5 h-5 lg:w-10 lg:h-10 obstaculo-paused"
              : isPlaying
                ? "obstaculo2 lg:top-[66%] top-[88%] w-5 h-5 lg:w-10 lg:h-10"
                : "hidden"
          }
        >
          <img src={objectImg} alt="Object2" ref={obPositionRef2} />
        </div>
      </div>
      {/* Chão */}
      <div className="h-[20%] w-full mt-0 pt-0 bg-neutral-800">
        {/* Retornar a tela principal */}
        {!isPlaying && <Return /> }
        {/* Telinha de fim de jogo */}
        {gameover && (
          <div className="absolute w-[40%] bg-red-500 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <span className="text-[5em]">FIM DE JOGO</span>
            <br />
            <span className=" w-full text-[#FFF]">Você fez {counter} pontos!</span>
            <button
              className="w-full cursor-pointer text-[#FFF] text-[2.5em] pt-6"
              onClick={() => {
                resetGameOver();
              }}
            >
              Jogar novamente
            </button>
          </div>
        )}
        {/* Botão de agachar, que aparece ao iniciar o jogo */}
        {isPlaying && (
          <button
            type="button"
            className=" bg-red-500 absolute top-5 text-white right-10 w-24 h-24 text-[2em]"
            onMouseDown={startCrouch}
            onMouseUp={endCrouch}
            onTouchStart={startCrouch}
            onTouchEnd={endCrouch}
          >
            Agachar
          </button>
        )}
      </div>
      {/* JSX contendo apenas lógica e retornando null */}
      <ObstacleWatcher
        obPositionRef={obPositionRef}
        obPositionRef2={obPositionRef2}
        characterRef={characterRef}
        setGameOver={setGameOver}
        setIsPlaying={setIsPlaying}
      />
    </section>
  );
};

export default CemeteryRun;
