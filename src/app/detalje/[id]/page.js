import Image from "next/image";
import { Suspense } from "react";
import Header from "../../components/Header";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa6";

export default function DetaljePage({ params }) {
  return (
    <div>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <FetchProduct params={params} />
      </Suspense>
    </div>
  );
}

async function FetchProduct({ params }) {
  const { id } = await params;
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await response.json();

  return (
    <div className="p-4">
      <div className="mb-4 flex justify-between">
        <Link
          href="/"
          className="flex items-center space-x-2 rounded-full bg-gray-200 p-1 text-gray-700 hover:text-gray-800"
        >
          <IoArrowBack className="h-8 w-8" />
        </Link>
        <FaRegStar className="align h-8 w-8 cursor-pointer rounded-full bg-gray-300 p-1 text-white" />
      </div>

      <div className="mb-4"></div>

      <div className="mb-4">
        <Image
          loading="eager"
          alt={product.title}
          src={product.images[0]}
          width={400}
          height={300}
          className="w-full rounded-lg bg-pink-100"
        />
      </div>
      <div className="mb-4">
        <h1 className="text-2xl font-bold">{product.title}</h1>
        <div className="flex space-x-2 p-2">
          <p className="rounded-full bg-blue-400 text-gray-700">
            {product.brand}
          </p>
          <p className="rounded-full bg-yellow-300 text-gray-700">
            ${product.price}
          </p>
          <p className="rounded-full bg-pink-400 text-gray-700">
            {product.stock}
          </p>
          <p className="rounded-full bg-indigo-400 text-gray-700">
            {product.tags}
          </p>
        </div>
      </div>

      <div>
        <h2 className="mb-2 font-semibold">Description</h2>
        <p className="text-gray-700">{product.description}</p>
        <button className="mt-4 w-full space-x-2 rounded-full bg-red-200 p-4 font-bold text-white">
          Buy Now
        </button>
      </div>
    </div>
  );
}
