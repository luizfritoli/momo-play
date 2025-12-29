import { Activity } from "react"

import MemoryArea from "./MemoryArea"

import Return from "../menu-components/Return"
import { useGameLogic } from "../../store/useGameLogic"

const MemoryGame = () => {

  const { isPlaying, setIsPlaying } = useGameLogic()

  return (
    <section className="h-screen w-full flex justify-center items-center flex-col">
      {/* Retornar a tela principal */}
      <Return />
      {!isPlaying && <button onClick={() => setIsPlaying(true)}>JOGAR</button>}
      {/* Área do jogo */}
      <Activity mode={isPlaying ? "visible" : "hidden"}>
      <MemoryArea />
      </Activity>
    </section>
  );
}

export default MemoryGame
