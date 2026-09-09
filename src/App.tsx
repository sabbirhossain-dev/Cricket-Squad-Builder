import { Suspense } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Players from "./components/players/Players";
import type { PlayerType } from "./type/PlayerType";

const playerFetch = async():Promise<PlayerType[]>=>{
  const res = await fetch("/playersData.json")
  const data = await res.json()
  return data
}

const App = () => {
  const playerPromise:Promise<PlayerType[]> = playerFetch()
  return (
    <>
      <div className="">
        <Navbar />
        <Hero />
        <Suspense  fallback={
          <div className="container mx-auto py-10">
            <p className="text-center text-lg font-semibold text-gray-500">
              Loading...
            </p>
          </div>
        }>
          <Players playerPromise={playerPromise} />
        </Suspense>
      </div>
    </>
  );
};

export default App;