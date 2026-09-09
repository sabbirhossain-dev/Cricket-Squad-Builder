import type { PlayerType } from "../../type/PlayerType"
import PlayerCard from "./PlayerCard"

type AllPlayerType = {
    players : PlayerType[]
}
const AllPlayers = ({players}:AllPlayerType) => {
  return (
    <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {players.map(
          (player) => (
            <PlayerCard
              key={player.id}
              {...player}
            />
          ),
        )}
      </div>
  )
}

export default AllPlayers