import type { Dispatch, SetStateAction } from "react"
import type { PlayerType } from "../../type/PlayerType"
import PlayerCard from "./PlayerCard"

type BatterType = {
    players : PlayerType[]
        dollars:number
        setDollars:Dispatch<SetStateAction <number>>
}

const Batter = ({players,dollars,setDollars}:BatterType) => {
    const batters = players.filter((player)=>
        player.role === "Batter")
  return (
    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {batters.map((batter)=>
             (
                <PlayerCard key={batter.id} {...batter} dollars={dollars}
              setDollars={setDollars}/>
            )
        )}
    </div>
  )
}

export default Batter