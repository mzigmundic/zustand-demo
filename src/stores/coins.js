import create from "zustand";

export const useCoinStore = create((set) => ({
  coins: 0,

  addCoins: (num) =>
    set((state) => ({
      coins: state.coins + num,
    })),

  removeCoins: () =>
    set(() => ({
      coins: 0,
    })),
}));
