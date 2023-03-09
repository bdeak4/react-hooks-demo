import { gameStatus } from "../constants/game";
import { checkPossibleWin } from "./result";

export const handleResultChange = (id, players, setPlayers, setCells) => {
  setCells((prev) => {
    const prevCells = [...prev];

    if (players.firstPlayer.current) {
      prevCells[id].symbol = players.firstPlayer.symbol;
    } else {
      prevCells[id].symbol = players.secondPlayer.symbol;
    }

    const [resultStatus, winCells] = checkPossibleWin(prevCells);
    if (resultStatus === gameStatus.WIN) {
      prevCells.forEach((cell) => {
        winCells.forEach((winCell) => {
          if (cell.id === winCell.id) {
            cell.win = true;
          }
        });
      });
    }

    return prevCells;
  });

  setPlayers((prev) => ({
    ...prev,
    firstPlayer: {
      ...prev.firstPlayer,
      current: !prev.firstPlayer.current,
    },
    secondPlayer: {
      ...prev.secondPlayer,
      current: !prev.secondPlayer.current,
    },
  }));
};
