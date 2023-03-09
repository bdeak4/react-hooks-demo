import clsx from "clsx";

const Cell = ({ handleClick, cell }) => {
  return (
    // <div className={`cell ${cell.win && "winCell"}`} onClick={handleClick}>
    <div
      className={clsx("cell", {
        win: cell.win,
      })}
      onClick={handleClick}
    >
      {cell.symbol}
    </div>
  );
};

export default Cell;
