import { motion } from "motion/react";
import { useEffect } from "react";

import { useMemoryStore } from "../../store/useMemoryStore"


const MemoryArea = ({ time, setTime}) => {
    const { cards, flipCard, endGame, gameover} = useMemoryStore()

    useEffect(() => {

      const timer = setInterval(() => {
        setTime((prev) => prev - 1)
      }, 1000)

        if (cards.every((card) => card.inGame === false)) {
          clearInterval(timer);
          endGame();
        }

      if(checkTimer() === true) {
        clearInterval(timer)
        endGame()
      }
      return () => clearInterval(timer)
    }, [time])


    const checkTimer = () => {
      if (time <= 0) {
       return true
      }

      return false
    }


    const formatTime = (time) => {
      const minutes = Math.floor(time / 60)
      let seconds = time % 60
      if (seconds < 10) {
        seconds = `0${seconds}`
      }

      return `${minutes}:${seconds}`
    }


  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-2xl font-bold">{formatTime(time)}</h1>
      <ul
        className={`
          grid 
          grid-cols-2         
          sm:grid-cols-4      
          md:grid-cols-6      
          lg:grid-cols-8      
          gap-4       
          md:gap-8 
          lg:gap-16 
          items-center 
          justify-center 
          ${gameover && "opacity-60"}
        `}
      >
        {cards.map((c) => (
          <motion.li
            className={`h-28 w-20 flex items-center justify-center 
              rounded-lg transition-all ease-in-out duration-250 cursor-pointer ${
              c.flipped ? "bg-green-500" : !c.flipped && !c.inGame ? "bg-neutral-500" : "bg-red-500"
            }`}
            key={c.id}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            onClick={() => {
              if (!c.inGame) return;
              flipCard(c.id);
            }}
          >
            <span className="text-white font-bold">{c.pair}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

export default MemoryArea;