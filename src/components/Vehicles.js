import { useVehicleStore } from "../stores/vehicles";

const Vehicles = () => {
  const {
    cars,
    trucks,
    totalVehicles,
    isLoadingGetCars,
    isLoadingGetTrucks,
    isErrorCars,
    isErrorTrucks,
    fetchCars,
    fetchTrucks,
    removeCars,
    removeTrucks,
    removeAll,
  } = useVehicleStore();

  return (
    <section>
      <h4>Vehicles</h4>
      <button onClick={fetchCars}>Fetch cars</button>
      <button onClick={fetchTrucks}>Fetch trucks</button>
      {totalVehicles > 0 && (
        <button onClick={removeAll}>Remove all vehicles</button>
      )}
      <div>
        {(!cars || cars?.length === 0) &&
          !isLoadingGetCars &&
          !isErrorCars &&
          "No cars"}
        {isLoadingGetCars && !isErrorCars && "Loading cars"}
        {isErrorCars && "Error fetching cars"}
        {cars?.length > 0 && !isLoadingGetCars && !isErrorCars && (
          <div>
            <button onClick={removeCars}>Remove cars</button>
            <ul>
              {cars.map((car) => {
                return (
                  <li key={car.id}>
                    <p>ID: {car.id}</p>
                    <p>Name: {car.name}</p>
                    <p>In stock: {car.inStock ? "Yes" : "No"}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
      <div>
        {(!trucks || trucks?.length === 0) &&
          !isLoadingGetTrucks &&
          !isErrorTrucks &&
          "No trucks"}
        {isLoadingGetTrucks && !isErrorTrucks && "Loading trucks"}
        {isErrorTrucks && "Error fetching trucks"}
        {trucks?.length > 0 && !isLoadingGetTrucks && !isErrorTrucks && (
          <div>
            <button onClick={removeTrucks}>Remove trucks</button>
            <ul>
              {trucks.map((truck) => {
                return (
                  <li key={truck.id}>
                    <p>ID: {truck.id}</p>
                    <p>Name: {truck.name}</p>
                    <p>In stock: {truck.inStock ? "Yes" : "No"}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
      <hr />
    </section>
  );
};

export default Vehicles;
