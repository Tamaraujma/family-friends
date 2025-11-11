import Footer from "./components/Footer";
import Header from "./components/Header";
import List from "./components/listview/List";
import CategoryList from "./components/CategoryList";
import { Suspense } from "react";

export default function Home({ searchParams }) {
  return (
    <div className="bg-red-50">
      <Header />
      <CategoryList />
      <Suspense>
        <ProductListContainer searchParams={searchParams} />
      </Suspense>
      <List />
      <Footer />
    </div>
  );
}

async function ProductListContainer({ searchParams }) {
  const category = await searchParams;
  console.log(category);
  return <List category={category} />;
}
