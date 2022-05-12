import { useCoinStore } from "../stores/coins";
import { usePetStore } from "../stores/pets";
import { useVehicleStore } from "../stores/vehicles";

import Coins from "./Coins";
import Pets from "./Pets";
import Vehicles from "./Vehicles";

const App = () => {
  const { coins } = useCoinStore();
  const { totalPets } = usePetStore();
  const { totalVehiclesInStock } = useVehicleStore();

  return (
    <>
      <header>
        <h1>Zustand Demo</h1>
        <section>
          <div>Total coins: {coins}</div>
          <div>Total pets: {totalPets}</div>
          <div>In stock vehicles: {totalVehiclesInStock}</div>
        </section>
        <hr />
        <hr />
      </header>
      <main>
        <Coins />
        <Pets />
        <Vehicles />
      </main>
    </>
  );
};

export default App;
