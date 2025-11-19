import { useState, Activity } from "react";


const Jokenpo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <section className="flex flex-col justify-center items-center h-screen w-full">
      <div className="h-[20%] flex justify-center items-center">
        <h1 className="text-center font-bold text-[2em]">PEDRA, PAPEL E TESOURA</h1>
      </div>
      <div
        className={
          !isPlaying
            ? "flex flex-col justify-center items-center h-[80%] w-full bg-green-700"
            : "flex flex-col justify-center items-center h-[80%] w-full bg-violet-700"
        }
      >
        <Activity mode={isPlaying ? "hidden" : "visible"}>
        <button
          type="button"
          className="bg-green-600 text-[2.5em] p-4 cursor-pointer rounded-lg w-[6em] mb-[5em] text-[#FFF] font-medium"
          onClick={() => setIsPlaying(true)}
        >
          JOGAR
        </button>
        </Activity>
      </div>
    </section>
  );
};

export default Jokenpo;
