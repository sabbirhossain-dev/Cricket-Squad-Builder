import type { Dispatch, SetStateAction } from "react"
import type { PlayerType } from "../../type/PlayerType"
import PlayerCard from "./PlayerCard"

type BowlerType = {
    players : PlayerType[]
        dollars:number
        setDollars:Dispatch<SetStateAction <number>>
}
const Bowler = ({players,dollars,setDollars}:BowlerType) => {
    const bowlers = players.filter((player)=>player.role === "Bowler")
  return (
    <div className="className = grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {bowlers.map((bowler)=>(
            <PlayerCard key={bowler.id} {...bowler} dollars={dollars}
              setDollars={setDollars} />
        ))}
    </div>
  )
}

export default Bowler