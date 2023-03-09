import { Fragment, useEffect, useState } from "react";

import { gameStatus } from "../../../constants/game";

const GameStatus = ({ result, players: { firstPlayer, secondPlayer } }) => {
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    if (firstPlayer.current) {
      setPlayer(secondPlayer);
    } else {
      setPlayer(firstPlayer);
    }
  }, [firstPlayer, secondPlayer]);

  if (result === gameStatus.PLAYING) {
    return null;
  }

  return (
    <Fragment>
      {result === gameStatus.WIN && <p>{player.name} won the game !!!</p>}
      {result === gameStatus.DRAW && <p>Draw !!!</p>}
    </Fragment>
  );
};

export default GameStatus;
