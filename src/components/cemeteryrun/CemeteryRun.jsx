import { useRef, Activity, useEffect } from "react";

import { useRunStore } from "../../store/useRunStore";
import { useGameLogic } from "../../store/useGameLogic";
import objectImg from "../../assets/cemeteryrun-assets/teste2.png";

import "../../main.css";
import ObstacleWatcher from "./logic";

const CemeteryRun = () => {
  const { jump, setJumpTrue, setJumpFalse, crouch, setCrouchTrue, setCrouchFalse } = useRunStore();
  const { isPlaying, setIsPlaying } = useGameLogic();

  const obPositionRef = useRef(null);
  const obPositionRef2 = useRef(null);
  const characterRef = useRef(null);

   const handleJump = () => {
    if (!isPlaying) return;
    if (jump) return;

    setJumpTrue();

    setTimeout(() => {
      setJumpFalse();
    }, 300);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Space" && !jump) {
        handleJump();
      }

      if (e.code === "ArrowDown") {
        setCrouchTrue()
      }
    };

    const handleKeyUp = (e) => {
      if (e.code === "ArrowDown") {
        setCrouchFalse()
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp)

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp)
    };
  }, [jump, isPlaying]);

  return (
    <section className="h-screen flex flex-col w-full max-h-[100%] cursor-pointer">
      <div className="h-[80%] bg-violet-500 items-end flex w-full" onClick={handleJump}>
        {/* Botão de jogar, que será escondido quando isPlaying for true */}
        <Activity mode={isPlaying ? "hidden" : "visible"}>
          <button
            type="button"
            className="absolute top-0 text-[5em]"
            onClick={() => setIsPlaying(true)}
          >
            Jogar
          </button>
        </Activity>
        {/* Personagem */}
        <div
          className={`transition-all mb-0 pb-0 items-start ml-[4.5%] ease-[cubic-bezier(0.3,0,0.6,1)] duration-100 
      ${jump ? "-translate-y-50 lg:-translate-y-70" : "translate-y-0"} ${crouch ? "bg-green-500 w-10 h-8 lg:w-24 lg:h-22" : "bg-red-500 w-10 h-18 lg:w-24 lg:h-32 "}`}
          ref={characterRef}
        ></div>
        {/* Objeto 1 */}
        <div className={isPlaying ? "obstaculo bg-green-500 h-18 w-12" : "obstaculo--paused invisible"} ref={obPositionRef}>
        </div>
        {/* Objeto 2 */}
        <div className={isPlaying ? "obstaculo2 lg:top-[52%] top-[70%] w-5 h-5 lg:w-10 lg:h-10" : "obstaculo--paused invisible"}>
          <img src={objectImg} alt="Object2" ref={obPositionRef2} />
        </div>
      </div>
      {/* Chão */}
      <div className="h-[20%] w-full mt-0 pt-0 bg-neutral-800">
        {" "}
        <Activity mode={isPlaying ? "visible" : "hidden"}>
          <button
            type="button"
            className=" bg-red-500 absolute top-5 text-white left-10 w-24 h-24 text-[2em]"
            onMouseDown={setCrouchTrue}
            onMouseUp={setCrouchFalse}
            onTouchStart={setCrouchTrue}
            onTouchEnd={setCrouchFalse}
          >
            Agachar
          </button>
        </Activity>
      </div>
      {/* JSX contendo apenas lógica e retornando null */}
      <ObstacleWatcher
        obPositionRef={obPositionRef}
        obPositionRef2={obPositionRef2}
        characterRef={characterRef}
        setIsPlaying={setIsPlaying}
      />
    </section>
  );
};

export default CemeteryRun;
