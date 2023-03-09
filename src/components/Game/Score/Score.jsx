import React from "react";

import { initialBoardState } from "../../../constants/board";
import { gameStatus } from "../../../constants/game";

const Score = ({
  players: { firstPlayer, secondPlayer },
  setPlayers,
  setCells,
  setResultStatus,
}) => {
  const handleResetScore = () => {
    setPlayers((prev) => {
      const prevPlayers = { ...prev };
      prevPlayers.firstPlayer.score = 0;
      prevPlayers.secondPlayer.score = 0;
      prevPlayers.firstPlayer.current = false;
      prevPlayers.secondPlayer.current = true;
      return prevPlayers;
    });
    setCells(initialBoardState());
    setResultStatus(gameStatus.PLAYING);
  };

  return (
    <section className="scoreboard">
      <p>
        {firstPlayer.name} ({firstPlayer.symbol}):
        {firstPlayer.score}
      </p>
      <p>
        {secondPlayer.name} ({secondPlayer.symbol}):
        {secondPlayer.score}
      </p>
      <button onClick={handleResetScore}>Reset score</button>
    </section>
  );
};

export default Score;
