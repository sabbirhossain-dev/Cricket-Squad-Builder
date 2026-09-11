import { Suspense, useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Players from "./components/players/Players";
import type { PlayerType } from "./type/PlayerType";
import { ToastContainer } from "react-toastify";

const playerFetch = async():Promise<PlayerType[]>=>{
  const res = await fetch("/playersData.json")
  const data = await res.json()
  return data
}

const playerPromise:Promise<PlayerType[]> = playerFetch()
const App = () => {
  
  const [dollars, setDollars] = useState(500000)
  return (
    <>
      <div className="">
        <Navbar dollars={dollars} setDollars={setDollars}/>
        <Hero />
        <Suspense  fallback={
          <div className="container mx-auto py-10">
            <p className="text-center text-lg font-semibold text-gray-500">
              Loading...
            </p>
          </div>
        }>
          <Players playerPromise={playerPromise} dollars={dollars} setDollars={setDollars} />
        </Suspense>
        <ToastContainer position="bottom-right"
        autoClose={5000}/>

      </div>
    </>
  );
};

export default App;