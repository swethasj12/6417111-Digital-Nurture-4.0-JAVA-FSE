import React from "react";
import ListofPlayers from "./ListofPlayers";

function App() {
  const flag = false; // Change to false to test the below-70 list

  return (
    <div className="App">
      <h1>🏏 Cricket App</h1>
      <ListofPlayers flag={flag} />
    </div>
  );
}

export default App;
