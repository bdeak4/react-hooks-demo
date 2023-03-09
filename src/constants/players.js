export const initialPlayerState = {
  name: "",
  score: 0,
  current: false,
};

export const initialPlayersState = {
  firstPlayer: { ...initialPlayerState, symbol: "X" },
  secondPlayer: { ...initialPlayerState, symbol: "O" },
};
