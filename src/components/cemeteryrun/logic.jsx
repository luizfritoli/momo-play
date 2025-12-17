import { useEffect } from "react";

const ObstacleWatcher = ({ obPositionRef, characterRef, setIsPlaying }) => {
  useEffect(() => {
    const handler = setInterval(() => {
      // Retorno caso nenhuma referência tenha valor
      if (!obPositionRef.current) return;
      if (!characterRef.current) return;

      // Capturados os valores das duas referências
      const objectPosition = obPositionRef.current.getBoundingClientRect();
      const characterPosition = characterRef.current.getBoundingClientRect();

      // Verificação se o lado esquerdo e direito se encostam (X)
      const positionX =
        objectPosition.left < characterPosition.right &&
        objectPosition.right > characterPosition.left;

      // Verificação da altura (Y)
      const positionY =
        objectPosition.top < characterPosition.bottom &&
        objectPosition.bottom > characterPosition.top;

      // Se os dois derem true, se colidiram. Fim de jogo.
      if (positionX && positionY) {
        setIsPlaying(false);
      }
    }, 100);

    return () => clearInterval(handler);
  }, []);

  return null;
};

export default ObstacleWatcher;
