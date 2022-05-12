import create from "zustand";
import { computed } from "zustand-middleware-computed-state";

const generateMockupCars = () => [
  {
    id: 1,
    name: "Subaru Impreza",
    inStock: true,
  },
  {
    id: 2,
    name: "Mitsubishi Lancer",
    inStock: true,
  },
  {
    id: 3,
    name: "Toyota Corolla",
    inStock: false,
  },
];

const generateMockupTrucks = () => [
  {
    id: 1,
    name: "Kenworth 800",
    inStock: true,
  },
  {
    id: 2,
    name: "Peterbilt 1200",
    inStock: false,
  },
  {
    id: 3,
    name: "Volvo 1500",
    inStock: false,
  },
];

export const useVehicleStore = create(
  computed(
    // store
    (set) => ({
      cars: null,
      trucks: null,
      isLoadingGetCars: false,
      isLoadingGetTrucks: false,
      isErrorCars: false,
      isErrorTrucks: false,

      fetchCars: async () => {
        set(() => ({
          isLoadingGetCars: true,
          isErrorCars: false,
        }));
        try {
          const response = await new Promise((resolve, reject) => {
            setTimeout(() => resolve(generateMockupCars()), 1000);
          });
          if (false) {
            throw new Error("Error fetching");
          }

          set(() => ({
            cars: response,
            isLoadingGetCars: false,
          }));
        } catch (error) {
          console.log(error);
          set(() => ({
            isErrorCars: true,
            isLoadingGetCars: false,
          }));
        }
      },

      fetchTrucks: async () => {
        set(() => ({
          isLoadingGetTrucks: true,
          isErrorTrucks: false,
        }));
        try {
          const response = await new Promise((resolve, reject) => {
            setTimeout(() => resolve(generateMockupTrucks()), 1000);
          });
          if (false) {
            throw new Error("Error fetching");
          }

          set(() => ({
            trucks: response,
            isLoadingGetTrucks: false,
          }));
        } catch (error) {
          console.log(error);
          set(() => ({
            isErrorTrucks: true,
            isLoadingGetTrucks: false,
          }));
        }
      },

      removeCars: () =>
        set(() => ({
          cars: null,
        })),

      removeTrucks: () =>
        set(() => ({
          trucks: null,
        })),

      removeAll: () =>
        set(() => ({
          cars: null,
          trucks: null,
        })),
    }),
    // computed values
    (state) => {
      function totalVehicles() {
        let total = 0;
        if (state.cars) {
          total += state.cars.length;
        }
        if (state.trucks) {
          total += state.trucks.length;
        }
        return total;
      }
      function totalVehiclesInStock() {
        let total = 0;
        if (state.cars) {
          total += state.cars.filter((car) => car.inStock).length;
        }
        if (state.trucks) {
          total += state.trucks.filter((truck) => truck.inStock).length;
        }
        return total;
      }

      return {
        totalVehicles: totalVehicles(),
        totalVehiclesInStock: totalVehiclesInStock(),
      };
    }
  )
);
