import React from "react";

const CurrentPlayer = ({ players }) => {
  const currentPlayer = players.firstPlayer.current
    ? players.firstPlayer
    : players.secondPlayer;

  return <p>Current player: {currentPlayer.name}</p>;
};

export default CurrentPlayer;
