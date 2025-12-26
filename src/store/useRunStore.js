import { create } from "zustand";

// Estados do CemeteryRun
export const useRunStore = create((set) => ({
  jump: false,
  crouch: false,
  gameover: false,

  startJump: () => {
    set({ jump: true });
  },

  endJump: () => {
    set({ jump: false });
  },

  startCrouch: () => {
    set({ crouch: true });
  },

  endCrouch: () => {
    set({ crouch: false });
  },

  setGameOver: () => {
    set({ gameover: true });
  },

  resetGameOver: () => {
    set({ gameover: false });
  },
}));
