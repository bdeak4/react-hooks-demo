export const initialBoardState = () => [
  { id: 0, symbol: "", win: false },
  { id: 1, symbol: "", win: false },
  { id: 2, symbol: "", win: false },
  { id: 3, symbol: "", win: false },
  { id: 4, symbol: "", win: false },
  { id: 5, symbol: "", win: false },
  { id: 6, symbol: "", win: false },
  { id: 7, symbol: "", win: false },
  { id: 8, symbol: "", win: false },
];

export const wins = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
