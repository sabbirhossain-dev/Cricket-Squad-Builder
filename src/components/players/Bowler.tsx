import type { PlayerType } from "../../type/PlayerType"
import PlayerCard from "./PlayerCard"

type BowlerType = {
    players: PlayerType[]
}
const Bowler = ({players}:BowlerType) => {
    const bowlers = players.filter((player)=>player.role === "Bowler")
  return (
    <div className="className = grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {bowlers.map((bowler)=>(
            <PlayerCard key={bowler.id} {...bowler} />
        ))}
    </div>
  )
}

export default Bowler