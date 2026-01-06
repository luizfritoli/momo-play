import { useMemoryStore } from "../../store/useMemoryStore"

const GameOver = ({ time, setIsPlaying, setTime }) => {
  const { resetGameover } = useMemoryStore()
 
  const resetMemory = () => {
    setIsPlaying(false)
    resetGameover()
    setTime(3)
  }
  return (
    <div className="absolute flex flex-col justify-center">
      <span className="text-7xl">FIM DE JOGO</span>
      {time <= 0 ? "O tempo se esgotou!" : "Você encontrou todos os pares!"}
      <button type="button" onClick={resetMemory}>Entendido</button>
    </div>
  )
}

export default GameOver
