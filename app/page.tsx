import Image from "next/image";
import { CardList } from "./components/CardList";
import { flags } from "./components/constants";

import { MainBoard } from "./components/MainBoard";
export default function Home() {
  return (
    <>
      <div className="h1">Home page</div>
      <div className="h2">Home page</div>
      {flags.cardList && <CardList />}
      {flags.mainBoard && <MainBoard />}
    </>
  );
}
