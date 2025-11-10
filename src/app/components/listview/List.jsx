import { animals } from "../../Data/Animals";
import Card from "./Card";

const List = () => {
  return (
    <div className="mt-5 mr-2 mb-2 ml-2 grid grid-cols-2 gap-4">
      {animals.map((animal) => (
        <Card
          slug={animal.slug}
          key={animal.slug}
          animal={animal}
          firstName={animal.firstName}
          breed={animal.breed}
          age={animal.age}
          image={animal.image}
        />
      ))}
    </div>
  );
};

export default List;
