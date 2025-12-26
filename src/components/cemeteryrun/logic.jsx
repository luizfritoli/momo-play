import { useEffect } from "react";

// Função que verificará se o personagem se colidiu com algum obstáculo
const ObstacleWatcher = ({ obPositionRef, characterRef, setGameOver, setIsPlaying, obPositionRef2 }) => {
  useEffect(() => {
    const handler = setInterval(() => {
      // Retorno caso nenhuma referência tenha valor
      if (!obPositionRef.current) return;
      if (!characterRef.current) return;

      // Capturados os valores das duas referências
      const objectPosition = obPositionRef.current.getBoundingClientRect();
      const object2Position = obPositionRef2.current.getBoundingClientRect();
      const characterPosition = characterRef.current.getBoundingClientRect();

      // Verificação se o lado esquerdo e direito se encostam (X)
      const positionX =
        objectPosition.left < characterPosition.right &&
        objectPosition.right > characterPosition.left;

      const positionX2 =
        object2Position.left < characterPosition.right &&
        object2Position.right > characterPosition.left;

      // Verificação da altura (Y)
      const positionY =
        objectPosition.top < characterPosition.bottom &&
        objectPosition.bottom > characterPosition.top;

      const positionY2 =
        object2Position.top < characterPosition.bottom &&
        object2Position.bottom > characterPosition.top;

      // Se os dois derem true, se colidiram. Fim de jogo.
      if ((positionX && positionY) || (positionX2 && positionY2)) {
        setGameOver();
        setIsPlaying(false)
      }
    }, 100);

    return () => clearInterval(handler);
  }, []);

  return null;
};

export default ObstacleWatcher;
