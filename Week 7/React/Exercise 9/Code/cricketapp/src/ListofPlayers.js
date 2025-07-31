import React from "react";

const ListofPlayers = () => {
  const players = [
    { name: "Virat", score: 95 },
    { name: "Rohit", score: 88 },
    { name: "Gill", score: 50 },
    { name: "Rahul", score: 69 },
    { name: "Hardik", score: 72 },
    { name: "Jadeja", score: 65 },
    { name: "Pant", score: 78 },
    { name: "Shreyas", score: 40 },
    { name: "Bumrah", score: 30 },
    { name: "Shami", score: 58 },
    { name: "Siraj", score: 74 },
  ];

  const below70 = players.filter((p) => p.score < 70); // ES6 arrow function

  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((p, index) => (
          <li key={index}>
            {p.name} - {p.score}
          </li>
        ))}
      </ul>

      <h2>Players with score below 70</h2>
      <ul>
        {below70.map((p, index) => (
          <li key={index}>
            {p.name} - {p.score}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
