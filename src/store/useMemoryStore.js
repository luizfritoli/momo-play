import { create } from "zustand";
import { shuffledCards } from "../lib/cards";

const checkPair = (flippedCards) => {
  return flippedCards[0].pair === flippedCards[1].pair;
};


export const useMemoryStore = create((set, get) => ({
  cards: shuffledCards,
  flippedCards: [],

  flipCard: (id) => {
    set((state) => {
      
      // Se tem mais de 2 cartas (ou 2) viradas, retorno
      if (state.flippedCards.length >= 2) return state;

      let didFlip = false;

      // Mapeia cada carta, e verifica qual tem o id solicitado para virar
      const updatedCards = state.cards.map((card) => {
        if (card.id === id && !card.flipped && card.inGame === true) {
          didFlip = true;
          return { ...card, flipped: true };
        }
        return card;
      });

      if (!didFlip) return state;

      // Adiciona cartas viradas ao array flippedCards
      const flippedCards = updatedCards.filter((c) => c.flipped);

      // Se duas cartas estiverem viradas, a comparação inicia
      if (flippedCards.length === 2) {
        setTimeout(() => {
          // Captura as cartas e as cartas viradas com o estado atual com o get
          // (nunca tinha usado o get, interessante ver como funciona com o timeout)
          const { cards, flippedCards, pairs } = get();

          // Se não tiver 2 cartas viradas, retorna
          if (flippedCards.length !== 2) return;

          // Análise se os pares são iguais
          const ok = checkPair(flippedCards);

          set({
            cards: cards.map((card) => {
              if (!card.flipped) return card;

              // Se forem iguais, tiram elas do jogo
              if (ok) {
                return {
                  ...card,
                  flipped: false,
                  inGame: false,
                };
              }

              // Se forem diferentes, voltam ao estado inicial
              return {
                ...card,
                flipped: false,
              };
            }),
            flippedCards: [],
          });
        }, 2000);
      }

      return {
        cards: updatedCards,
        flippedCards,
      };
    });
  },
}));
