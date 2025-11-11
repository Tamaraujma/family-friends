import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

const List = ({ category }) => {
  return (
    <Suspense fallback={<div>Loading products...</div>}>
      <FetchProduct category={category} />
    </Suspense>
  );
};

const FetchProduct = async ({ category }) => {
  "use server";
  const url = category
    ? `https://dummyjson.com/products/category/${category}`
    : "https://dummyjson.com/products";

  const response = await fetch(url);
  const { products } = await response.json();
  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {products.map((product) => (
        <Link href={`/detalje/${product.id}`} key={product.id}>
          <div className="overflow-hidden rounded-lg bg-white shadow transition-shadow hover:shadow-lg">
            <div className="relative h-40 w-full">
              <Image
                loading="eager"
                alt={product.title}
                src={product.images[0]}
                width={300}
                height={200}
                className="h-full w-full bg-pink-100"
              />
            </div>
            <div className="p-3">
              <h2 className="line-clamp-1 font-semibold">{product.title}</h2>
              <p className="text-xs text-gray-600">{product.brand}</p>
              <p className="text-sm font-bold">${product.price}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
export default List;
