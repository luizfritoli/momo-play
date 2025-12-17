import { useRef, Activity } from "react";

import { useRunLogic } from "../../store/useRunLogic";
import { useGameLogic } from "../../store/useGameLogic";
import objectImg from "../../assets/cemeteryrun-assets/teste2.png";

import "../../main.css";
import ObstacleWatcher from "./logic";

const CemeteryRun = () => {
  const { jump, setJump } = useRunLogic();
  const { isPlaying, setIsPlaying } = useGameLogic();

  const obPositionRef = useRef(null);
  const characterRef = useRef(null);

  const pressKeyDown = (e) => {
    if (e.code === "Space" && !jump) {
      setJump(true);
    }

    setTimeout(() => {
      setJump(false);
    }, 300);
  };

  window.addEventListener("keydown", pressKeyDown);

  return (
    <section className="h-screen flex flex-col w-full max-h-[100%]">
      <div className="h-[80%] bg-violet-500 items-end flex w-full">
        {/* Botão de jogar, que será escondido quando isPlaying for true */}
        <Activity mode={isPlaying ? "hidden" : "visible"}>
          <button
            type="button"
            className="absolute top-0 text-[20em]"
            onClick={() => setIsPlaying(true)}
          >
            Jogar
          </button>
        </Activity>
        {/* Personagem */}
        <div
          className={`w-24 h-24 bg-red-500 transition-all mb-0 pb-0 items-start ml-[4.5%] ease-out duration-800 
      ${jump ? "-translate-y-200" : "translate-y-0"}`}
          ref={characterRef}
        ></div>
        {/* Objeto 1 */}
        <div className={isPlaying ? "obstaculo" : "obstaculo--paused invisible"}>
          <img src={objectImg} alt="Object" ref={obPositionRef} />
        </div>
      </div>
      {/* Chão */}
      <div className="h-[20%] w-full mt-0 pt-0 bg-neutral-800"></div>
      {/* JSX contendo apenas lógica e retornando null */}
      <ObstacleWatcher
        obPositionRef={obPositionRef}
        characterRef={characterRef}
        setIsPlaying={setIsPlaying}
      />
    </section>
  );
};

export default CemeteryRun;
