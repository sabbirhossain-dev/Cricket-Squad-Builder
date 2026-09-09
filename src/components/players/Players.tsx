import { use, useState } from "react";
import type { PlayerType } from "../../type/PlayerType";
import Batter from "./Batter";
import AllPlayers from "./AllPlayers";
import Bowler from "./Bowler";
import AllRounder from "./AllRounder";

type PlayersProps = {
  playerPromise: Promise<PlayerType[]>;
};

const Players = ({ playerPromise }: PlayersProps) => {
  const players = use(playerPromise);

  const [all,setAll] = useState(true)
  const [batter,setBatter] = useState(false)
  const [bowler,setBowler] = useState(false)
  const [allRounder,setAllRounder] = useState(false)

  const handleAll =()=>{
    setAll(true)
    setBatter(false)
    setBowler(false)
    setAllRounder(false)
  }
  const handleBatter =()=>{
    setAll(false)
    setBatter(true)
    setBowler(false)
    setAllRounder(false)
  }

  const handleBowler =()=>{
    setAll(false)
    setBatter(false)
    setBowler(true)
    setAllRounder(false)
  }

  const handleAllRounder =()=>{
    setAll(false)
    setBatter(false)
    setBowler(false)
    setAllRounder(true)
  }
  return (
    <div className="container mx-auto my-10">
      
      <div className="flex justify-between items-center pb-10">
        <h1 className=" text-2xl font-bold">Player Type: <span className="text-rotate text-2xl opacity-80 text-[#2225ca]">
        <span>
          <span>Batter</span>
          <span>Bowler</span>
          <span>All-rounder</span>
        </span>
      </span></h1>

      <div className="flex items-center gap-2">
        <button
          className={`btn opacity-90 ${all ? "btn-primary" : "btn-soft btn-primary"}`}
          onClick={handleAll}
        >
          All
        </button>

        <button
          className={`btn opacity-90 ${batter ? "btn-primary" : "btn-soft btn-primary"}`}
          onClick={handleBatter}
        >
          Batter
        </button>

        <button
          className={`btn opacity-90 ${bowler ? "btn-primary" : "btn-soft btn-primary"}`}
          onClick={handleBowler}
        >
          Bowler
        </button>

        <button
          className={`btn opacity-90 ${allRounder ? "btn-primary " : "btn-soft btn-primary"}`}
          onClick={handleAllRounder}
        >
          All-rounder
        </button>
      </div>

      <div>
        <button className="btn btn-soft btn-primary">Available</button>
        <button className="btn btn-soft btn-secondary">Selected</button>
      </div>
      </div>

      {all && <AllPlayers players={players} />}
      {batter && <Batter players={players} />}
      {bowler && <Bowler players={players} />}
      {allRounder && <AllRounder players={players} />}
      
      

      
    </div>
  );
};

export default Players;
