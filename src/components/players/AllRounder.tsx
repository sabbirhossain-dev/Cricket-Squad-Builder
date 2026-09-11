import type { Dispatch, SetStateAction } from "react"
import type { PlayerType } from "../../type/PlayerType"
import PlayerCard from "./PlayerCard"

type AllRounderType = {
    players : PlayerType[]
        dollars:number
        setDollars:Dispatch<SetStateAction <number>>
}

const AllRounder = ({players,dollars,setDollars}:AllRounderType) => {
    const allRounder = players.filter((player)=>player.role === "All-rounder")
  return (
    <div className="className = grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {allRounder.map((player)=>(
            <PlayerCard key={player.id} {...player} dollars={dollars}
              setDollars={setDollars} />
       ) )}
    </div>
  )
}

export default AllRounder