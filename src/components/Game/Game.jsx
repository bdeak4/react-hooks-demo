import React, { useState, useEffect } from "react";

import Board from "./Board";
import Score from "./Score";

import { initialBoardState } from "../../constants/board";
import { gameStatus } from "../../constants/game";
import CurrentPlayer from "./CurrentPlayer";

const Game = ({ players, setPlayers }) => {
  const [cells, setCells] = useState(initialBoardState());
  const [resultStatus, setResultStatus] = useState(gameStatus.PLAYING);

  useEffect(() => {
    const winCells = cells.filter((cell) => cell.win).length;
    if (winCells) {
      setPlayers((prev) => ({
        ...prev,
        firstPlayer: {
          ...prev.firstPlayer,
          score: prev.firstPlayer.current
            ? prev.firstPlayer.score + 1
            : prev.firstPlayer.score,
        },
        secondPlayer: {
          ...prev.secondPlayer,
          score: prev.secondPlayer.current
            ? prev.secondPlayer.score + 1
            : prev.secondPlayer.score,
        },
      }));

      setResultStatus(gameStatus.WIN);
    } else if (cells.filter((cell) => !cell.symbol).length === 0 && !winCells) {
      setResultStatus(gameStatus.DRAW);
    }
  }, [cells, setPlayers]);

  return (
    <section className="game">
      <CurrentPlayer players={players} />
      <Score
        players={players}
        setPlayers={setPlayers}
        setCells={setCells}
        setResultStatus={setResultStatus}
      />
      <Board
        players={players}
        setPlayers={setPlayers}
        cells={cells}
        setCells={setCells}
        resultStatus={resultStatus}
        setResultStatus={setResultStatus}
      />
    </section>
  );
};

export default Game;
