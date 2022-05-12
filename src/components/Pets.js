import { useEffect } from "react";
import { usePetStore } from "../stores/pets";

const Pets = () => {
  const {
    puppies,
    cats,
    totalPets,
    addPuppy,
    addCat,
    removePuppies,
    removeCats,
    removeAll,
  } = usePetStore();

  useEffect(() => {
    console.log("cats changed");
  }, [cats]);

  return (
    <section>
      <h4>Pets</h4>
      <div>
        <div>Puppies: {puppies}</div>
        <div>Cats: {cats}</div>
        <button onClick={addPuppy}>Add puppy</button>
        <button onClick={addCat}>Add cat</button>
        {puppies > 0 && <button onClick={removePuppies}>Remove puppies</button>}
        {cats > 0 && <button onClick={removeCats}>Remove cats</button>}
        {totalPets > 0 && <button onClick={removeAll}>Remove all</button>}
      </div>
      <hr />
    </section>
  );
};

export default Pets;
