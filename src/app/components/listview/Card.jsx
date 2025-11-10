import Image from "next/image";
import Link from "next/link";

const Card = ({ firstName, breed, age, image, slug }) => {
  return (
    <Link href={`/detalje/${slug}`}>
      <div className="overflow-hidden rounded-lg bg-white shadow">
        <div className="relative h-30 w-full">
          <Image
            loading="eager"
            alt={firstName}
            src={image}
            width={300}
            height={200}
          />
        </div>

        <div className="p-3 text-sm font-semibold">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-sm">{firstName}</h2>
              <p className="text-gray-400">{breed}</p>
            </div>

            <div className="text-right text-gray-400">
              <span>{age}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
