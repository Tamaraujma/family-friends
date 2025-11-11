import Image from "next/image";
import Link from "next/link";

const Card = ({ title, desription, image, slug, brand }) => {
  return (
    <Link href={`/detalje/${slug}`}>
      <div className="overflow-hidden rounded-lg bg-white shadow">
        <div className="relative h-30 w-full">
          <Image
            loading="eager"
            alt={title}
            src={image}
            width={300}
            height={200}
          />
        </div>

        <div className="p-3 text-sm font-semibold">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-sm">{title}</h2>
              <p className="text-gray-600">{brand}</p>
              <p className="font-bold">{price}</p>
              <p className="">{desription}</p>
            </div>

            <div className="text-right text-gray-400">
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
