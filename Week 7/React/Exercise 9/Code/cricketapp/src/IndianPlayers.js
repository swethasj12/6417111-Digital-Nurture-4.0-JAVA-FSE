import React from "react";

const IndianPlayers = () => {
  const players = ["Virat", "Rohit", "Gill", "Rahul", "Hardik", "Jadeja"];

  // Destructuring
  const oddPlayers = players.filter((_, index) => index % 2 !== 0);
  const evenPlayers = players.filter((_, index) => index % 2 === 0);

  const T20Players = ["Surya", "Kishan", "Chahal"];
  const RanjiTrophyPlayers = ["Pujara", "Saha", "Unadkat"];

  // Merge using spread operator
  const allPlayers = [...T20Players, ...RanjiTrophyPlayers];

  return (
    <div>
      <h2>Even Team Players</h2>
      <ul>
        {evenPlayers.map((p, index) => (
          <li key={index}>{p}</li>
        ))}
      </ul>

      <h2>Odd Team Players</h2>
      <ul>
        {oddPlayers.map((p, index) => (
          <li key={index}>{p}</li>
        ))}
      </ul>

      <h2>Merged Players (T20 + Ranji)</h2>
      <ul>
        {allPlayers.map((p, index) => (
          <li key={index}>{p}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
