"use client";
import { useRouter } from "next/navigation";

const CategoryElement = ({ category }) => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(`?category=${category}`)}
      className="cursor-pointer rounded-full border border-gray-300 bg-white px-2 py-1 whitespace-nowrap hover:bg-red-300"
    >
      <span className="font-medium">{category}</span>
    </button>
  );
};

export default CategoryElement;
