import create from "zustand";
import { computed } from "zustand-middleware-computed-state";

export const usePetStore = create(
  computed(
    // store
    (set) => ({
      puppies: 0,
      cats: 0,

      addPuppy: () =>
        set((state) => ({
          puppies: state.puppies + 1,
        })),

      addCat: () =>
        set((state) => ({
          cats: state.cats + 1,
        })),

      removePuppies: () =>
        set(() => ({
          puppies: 0,
        })),

      removeCats: () =>
        set(() => ({
          cats: 0,
        })),

      removeAll: () =>
        set(() => ({
          cats: 0,
          puppies: 0,
        })),
    }),
    // computed values
    (state) => {
      function totalPets() {
        return state.puppies + state.cats;
      }

      return {
        totalPets: totalPets(),
      };
    }
  )
);
