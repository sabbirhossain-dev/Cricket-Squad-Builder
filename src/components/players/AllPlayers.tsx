import type { Dispatch, SetStateAction } from "react"
import type { PlayerType } from "../../type/PlayerType"
import PlayerCard from "./PlayerCard"

type AllPlayerType = {
    players : PlayerType[]
    dollars:number
    setDollars:Dispatch<SetStateAction <number>>
}
const AllPlayers = ({players,dollars,setDollars}:AllPlayerType) => {
  return (
    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {players.map(
          (player) => (
            <PlayerCard
              key={player.id}
              {...player}
              dollars={dollars}
              setDollars={setDollars}
            />
          ),
        )}
      </div>
  )
}

export default AllPlayers