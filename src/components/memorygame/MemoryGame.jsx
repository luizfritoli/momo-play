import { Activity } from "react"

import MemoryArea from "./GameArea"
import GameOver from "./GameOver"
import Return from "../menu-components/Return"

import { useGameLogic } from "../../store/useGameLogic"
import { useMemoryStore } from "../../store/useMemoryStore"


const MemoryGame = () => {
  const { isPlaying, setIsPlaying, time, setTime } = useGameLogic();
  const { gameover, quitGame } = useMemoryStore()

  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center p-4 overflow-x-hidden select-none">
     {/* Retornar a tela principal */}
      <div className="absolute top-4 right-4" onClick={quitGame}>
        <Return />
      </div>

      {!isPlaying && (
        <button 
          className="px-8 py-4 text-4xl rounded-full font-bold cursor-pointer"
          onClick={() => setIsPlaying(true)}
        >
          JOGAR
        </button>
      )}

      {/* Área do jogo */}
      <div className="w-full max-w-5xl flex flex-col items-center justify-center">
        {isPlaying && (
          <Activity mode="visible">
            <MemoryArea time={time} setTime={setTime} />
          </Activity>
        )}
      </div>

      {/* Menu de fim de jogo */}
        <Activity mode={gameover ? "visible" : "hidden"}>
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <GameOver time={time} setIsPlaying={setIsPlaying} setTime={setTime} />
          </div>
        </Activity>
    </section>
  );
}

export default MemoryGame
