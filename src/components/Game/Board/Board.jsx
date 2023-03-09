import { Fragment } from "react";

import Cell from "./Cell";
import GameStatus from "./GameStatus";

import { handleResultChange } from "../../../utils/play";

import { initialBoardState } from "../../../constants/board";
import { error } from "../../../constants/error";
import { gameStatus } from "../../../constants/game";

const Board = ({
  players,
  setPlayers,
  cells,
  setCells,
  resultStatus,
  setResultStatus,
}) => {
  const handlePlayerMove = (id) => () => {
    if (resultStatus !== gameStatus.PLAYING) {
      return;
    }

    if (cells[id].symbol) {
      alert(error.alreadySelected);
      return;
    }
    handleResultChange(id, players, setPlayers, setCells);
  };

  const handleNewGame = () => {
    setResultStatus(gameStatus.PLAYING);
    setCells(initialBoardState());
  };

  return (
    <Fragment>
      <section className="board">
        {cells.map((cell) => (
          <Cell
            key={cell.id}
            cell={cell}
            handleClick={handlePlayerMove(cell.id)}
          />
        ))}
      </section>
      <button onClick={handleNewGame}>New game</button>
      <GameStatus result={resultStatus} players={players} />
    </Fragment>
  );
};

export default Board;
