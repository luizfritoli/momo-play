import { motion } from "motion/react";
import { useEffect, useState } from "react";

import { useMemoryStore } from "../../store/useMemoryStore"

const MemoryArea = () => {
    const { cards, flipCard} = useMemoryStore()
    const [time, setTime] = useState(300)

    useEffect(() => {
      const timer = setInterval(() => {
        setTime((prev) => prev - 1)
      }, 1000)

      return () => clearInterval(timer)
    }, [])

    const formatTime = (time) => {
      const minutes = Math.floor(time / 60)
      let seconds = time % 60
      if (seconds < 10) {
        seconds = `0${seconds}`
      }

      return `${minutes}:${seconds}`
    }


  return (
      <ul  className="grid grid-rows-3 grid-cols-8 gap-16 items-center justify-center">
        <h1>{formatTime(time)}</h1>
        {cards.map((c) => (
          <motion.li
            className={`h-28 w-20 transition-all ease-in-out duration-250 ${c.flipped ? "bg-green-500" : !c.flipped && !c.inGame ? "bg-neutral-500" : "bg-red-500"}`}
            key={c.id}
            initial={{ scale: 0}} animate={{ scale: 1}}
            onClick={() => {
              if (!c.inGame) return;
              flipCard(c.id);
            }}
          >
            {c.pair}
          </motion.li>
        ))}
      </ul>
  );
}

export default MemoryArea
