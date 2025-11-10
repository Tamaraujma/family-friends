import { animals } from "../../Data/Animals";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function DetaljePage({ params }) {
  const animal = animals.find((animal) => animal.slug === params.slug);

  if (!animal) {
    return <div>Dyr ikke fundet</div>;
  }

  return (
    <div>
      <Header />
      <div className="p-4">
        <h1 className="text-2xl font-bold">{animal.firstName}</h1>
        <p className="text-gray-600">{animal.breed}</p>
        <p className="text-gray-600">{animal.age}</p>
        <img
          src={animal.image}
          alt={animal.firstName}
          className="w-full rounded-lg"
        />
        <p className="mt-4">{animal.longDesc}</p>
      </div>
      <Footer />
    </div>
  );
}
