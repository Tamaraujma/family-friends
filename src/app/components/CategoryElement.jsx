"use client";
import { useRouter } from "next/navigation";

const CategoryElement = ({ category }) => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(`?category=${category}`)}
      className="flex cursor-pointer items-center space-x-3 rounded-full border border-gray-300 bg-white px-4 py-3 hover:bg-red-300"
    >
      <span className="font-medium">{category}</span>
    </button>
  );
};

export default CategoryElement;
