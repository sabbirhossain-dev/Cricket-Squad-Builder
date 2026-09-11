import { use, useState, type Dispatch, type SetStateAction } from "react";
import type { PlayerType } from "../../type/PlayerType";
import Batter from "./Batter";
import AllPlayers from "./AllPlayers";
import Bowler from "./Bowler";
import AllRounder from "./AllRounder";
import Selected from "./Selected";

type PlayersProps = {
  playerPromise: Promise<PlayerType[]>;
  dollars:number;
  setDollars: Dispatch<SetStateAction<number>>
};

const Players = ({ playerPromise,dollars,setDollars }: PlayersProps) => {
  const players = use(playerPromise);

  const [all,setAll] = useState(true)
  const [batter,setBatter] = useState(false)
  const [bowler,setBowler] = useState(false)
  const [allRounder,setAllRounder] = useState(false)
  const [playerStatus, setPlayerStatus] = useState("available")

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

  const handleAvailable =(type:string)=>{
    setPlayerStatus(type);
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

      <div className="join">
        {/* <button className="btn btn-soft btn-primary">Available</button> */}
        <button className={`btn ${playerStatus === "available" ?  "btn-secondary":"btn-soft btn-secondary" } rounded-l-0`} onClick={()=>handleAvailable("available")}>Available</button>
        <button className={`btn ${playerStatus === "selected" ? "btn-secondary":"btn-soft btn-secondary" } rounded-l-0`} onClick={()=>handleAvailable("selected")}>Selected</button>
      </div>
      </div>

      <h2 className="text-2xl text-blue-700 pb-7 font-semibold opacity-80 text-center">
        {playerStatus === "available" ? "Available Players" : "Selected Player"}
      </h2>

      {playerStatus === "available" && 
      <>
        {all && <AllPlayers players={players} dollars={dollars} setDollars={setDollars} />}
        {batter && <Batter players={players} />}
        {bowler && <Bowler players={players} />}
        {allRounder && <AllRounder players={players} />}
    </>
    }

    {playerStatus === "selected" && <Selected />}
      
      

      
    </div>
  );
};

export default Players;
