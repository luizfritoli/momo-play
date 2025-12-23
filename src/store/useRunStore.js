import { create } from "zustand";

// Estados do CemeteryRun
export const useRunStore = create((set) => ({
  jump: false,
  crouch: false,

  setJumpTrue: () => {
    set({ jump: true });
  },

  setJumpFalse: () => {
    set({ jump: false });
  },

  setCrouchTrue: () => {
    set({ crouch: true });
  },

  setCrouchFalse: () => {
    set({ crouch: false });
  },
}));

