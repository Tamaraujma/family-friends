import Image from "next/image";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Button from "./components/Button";
import List from "./components/listview/List";

export default function Home() {
  return (
    <div>
      <Header />
      <Button />
      <List />
      <Footer />
    </div>
  );
}
