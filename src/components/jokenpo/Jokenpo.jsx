import { useState, Activity, useEffect } from "react";

const Jokenpo = () => {
  // Começar a partida pela escolha
  const [isPlaying, setIsPlaying] = useState(false);

  // Armazenar as escolhas do computador e do usuário
  const [playerChoice, setPlayerChoice] = useState(null)
  const [computerChoice, setComputerChoice] = useState(null)

  const [runner, setRunner] = useState(false)

  // Mostrar e destruir a mensagem da escolha do usuário
  const [showMessage, setShowMessage] = useState(false)

  const [result, setResult] = useState(null)
  const startJokenpoMatch = () => {
    const options = ["Stone", "Paper", "Scissors"]
    
    setComputerChoice(options[Math.floor(Math.random() * options.length)])

    console.log(computerChoice)
    
   if (
  (playerChoice === "Stone" && computerChoice === "Scissors") ||
  (playerChoice === "Paper" && computerChoice === "Stone") ||
  (playerChoice === "Scissors" && computerChoice === "Paper")
) {
  setResult("Você venceu!")
} else if (playerChoice === computerChoice) {
  setResult("Empate!");
} else {
  setResult("Você perdeu!")
}

  }

  const setChoice = (choice) => {
    setPlayerChoice(choice)
    setShowMessage(true)
    setRunner(true)
}

  useEffect(() => {
    const handler = setTimeout(()=> {
      setRunner(false)
    }, 4000)

    return () => clearTimeout(handler)
  }, [runner])

  useEffect(() => {
    const visibility = setTimeout(() => {
      setShowMessage(false)
      startJokenpoMatch()
    }, 3000)

    return () => clearTimeout(visibility)
  }, [showMessage])
  return (
    <section className="flex flex-col justify-center items-center h-screen w-full">
      <div className="h-[5%] flex justify-center items-center">
        <h1 className="text-center font-bold text-[2em]">PEDRA, PAPEL E TESOURA</h1>
      </div>
      <Activity mode={isPlaying ? "hidden" : "visible"}>
        <div className="flex flex-col justify-center items-center h-[70%] w-full bg-green-700">
          <button
            type="button"
            className="bg-green-600 text-[2.5em] p-4 cursor-pointer rounded-lg w-[6em] 
            mb-[5em] text-[#FFF] font-medium"
            onClick={() => setIsPlaying(true)}
          >
            JOGAR
          </button>
        </div>
      </Activity>
      <Activity mode={isPlaying && !playerChoice ? "visible" : "hidden"}>
        <div className="flex flex-col justify-center items-center h-[70%] w-full bg-neutral-700">
          <h2>FAÇA A SUA ESCOLHA!</h2>
          <button type="button" onClick={() => setChoice("Stone")}>
            Pedra
          </button>
          <button type="button" onClick={() => setChoice("Paper")}>
            Papel
          </button>
          <button type="button" onClick={() => setChoice("Scissors")}>
            Tesoura
          </button>
        </div>
      </Activity>
      <Activity mode={isPlaying && playerChoice ? "visible" : "hidden"}>
        <div className="flex flex-col gap-12 justify-center items-center h-[70%] w-full bg-violet-300">
          {showMessage && (
            <h2 className="">
              Sua escolha foi{" "}
              {playerChoice === "Stone" ? "pedra" : playerChoice === "Paper" ? "papel" : "tesoura"}!
            </h2>
          )}
          <div className="flex gap-12">
            <span>{runner ? "Escolhendo..." : playerChoice}</span>
            <span>VS</span>
            <span>{runner ? "Escolhendo..." : computerChoice}</span>
            <span>{runner ? null : result}</span>
          </div>
        </div>
      </Activity>
    </section>
  );
};

export default Jokenpo;
