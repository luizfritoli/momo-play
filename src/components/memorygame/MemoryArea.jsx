import { useState } from "react"
import { useMemoryStore } from "../../store/useMemoryStore"

const MemoryArea = () => {
    const { cards, flipCard, flippedCards} = useMemoryStore()

  return (
    <ul className="grid grid-rows-3 grid-cols-8 gap-16 items-center justify-center">
  {cards.map((c) => (
    <li className={`h-28 w-20 ${c.flipped ? "bg-green-500" : !c.flipped && !c.inGame ? "bg-neutral-500" : "bg-red-500"}`} key={c.id} onClick={() => {
        if (!c.inGame) return
        flipCard(c.id)
    }}>
      {c.pair}
    </li>
  ))}
</ul>


  )
}

export default MemoryArea
