import MemoryArea from "./MemoryArea"

import Return from "../menu-components/Return"

const MemoryGame = () => {
  return (
    <section className="h-screen w-full flex justify-center items-center flex-col">
      <h1>OI</h1>
      {/* Retornar a tela principal */}
      <Return />
      {/* Área do jogo */}
      <MemoryArea />
    </section>
  )
}

export default MemoryGame
