import type { PlayerType } from "../../type/PlayerType"
import PlayerCard from "./PlayerCard"

type BatterType = {
    players: PlayerType[]
}

const Batter = ({players}:BatterType) => {
    const batters = players.filter((player)=>
        player.role === "Batter")
  return (
    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {batters.map((batter)=>
             (
                <PlayerCard key={batter.id} {...batter}/>
            )
        )}
    </div>
  )
}

export default Batter