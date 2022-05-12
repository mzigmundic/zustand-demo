import { useCoinStore } from "../stores/coins";

const Coins = () => {
  // const coins = useCoinStore((state) => state.coins);
  // const addCoins = useCoinStore((state) => state.addCoins);
  // const removeCoins = useCoinStore((state) => state.removeCoins);
  const {coins, addCoins, removeCoins} = useCoinStore();

  return (
    <section>
      <h4>Coins</h4>
      <p>Coins: {coins}</p>
      <button onClick={() => addCoins(10)}>Add coins</button>
      {coins > 0 && <button onClick={removeCoins}>Remove coins</button>}
      <hr />
    </section>
  );
};

export default Coins;
