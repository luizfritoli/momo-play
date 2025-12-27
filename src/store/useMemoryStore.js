import { create } from "zustand";
import { cards } from "../lib/cards";

const checkPair = (flippedCards) => {
    return flippedCards[0].pair === flippedCards[1].pair
}

export const useMemoryStore = create((set) => ({
    // Todas as cartas do jogo
  cards: cards,
  // Quantidade de cartas viradas
  flipped: 0,
  // Quais cartas estão viradas
  flippedCards: [],

  flipCard: (id) => {
    set((state) => {
        // Se tiver 2 cartas viradas, retorna
      if (state.flipped >= 2) {
        return state;
      }

      let didFlip = false;

      const updatedCards = state.cards.map((card) => {
        // Verificação se a carta não está virada para virá-la
        if (card.id === id && !card.flipped) {
          didFlip = true;
          return {
            ...card,
            flipped: true,
          };
        }
        return card;
      });

      if (!didFlip) {
        return state;
      }

      // Colocar as cartas viradas no flippedCards
      const flippedCards = updatedCards.filter(card => card.flipped);
      
      // Se tiver 2 cartas viradas, bate a condição pra checar
      if (flippedCards.length === 2) {
        const ok = checkPair(flippedCards);

        // Se tiver zero bala, vai pontuar e as cartas sairão do jogo
        if (ok) {
          const resolvedCards = updatedCards.map((card) => {
            if (card.flipped) {
              return {
                ...card,
                flipped: false,
                inGame: false,
              };
            }

            return card;
          });

          return {
            cards: resolvedCards,
            flipped: 0,
            flippedCards: [],
          };
        }
      }


      return {
        cards: updatedCards,
        flipped: flippedCards.length,
        flippedCards,
      };
    });
  },
}));
