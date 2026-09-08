import { useEffect, useState } from "react";

const Players = () => {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/playersData.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch player data");
        }

        return res.json();
      })
      .then((data) => {
        setPlayers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading players...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className=" container mx-auto">
      <h1>Cricket Players</h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {players.map((player) => (
          <div key={player.id} className="rounded-xl border p-4 shadow">
            <img
              src={player.image}
              alt={player.name}
              className="h-48 w-full rounded-lg object-cover"
            />

            <h2 className="mt-3 text-xl font-bold">
              {player.name}
            </h2>

            <p>{player.origin}</p>
            <p>{player.role}</p>

            <p className="mt-2">
              Rating: <strong>{player.rating}</strong>
            </p>

            <p>
              Price:{" "}
              <strong>${player.price.toLocaleString()}</strong>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Players;
