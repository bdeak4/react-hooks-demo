import React, { Fragment } from "react";

import { error } from "../../constants/error";

const Form = ({ players, setPlayers, onSubmit }) => {
  const handleNameInputChange = (event) => {
    setPlayers((prev) => ({
      ...prev,
      [event.target.name]: {
        ...prev[event.target.name],
        name: event.target.value,
      },
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!players.firstPlayer.name || !players.secondPlayer.name) {
      alert(error.emptyField);
      return;
    }

    if (players.firstPlayer.name === players.secondPlayer.name) {
      alert(error.sameName);
      return;
    }

    onSubmit();
  };

  return (
    <Fragment>
      <h1>Tic Tac Toe</h1>

      <form onSubmit={handleSubmit}>
        <label className="label">
          First Player name:
          <input
            placeholder="First Player name"
            name="firstPlayer"
            value={players.firstPlayer.name}
            onChange={handleNameInputChange}
          />
        </label>

        <label className="label">
          Player Two name:
          <input
            placeholder="Second Player name"
            name="secondPlayer"
            value={players.secondPlayer.name}
            onChange={handleNameInputChange}
          />
        </label>

        <button type="submit">Start</button>
      </form>

      <pre>{JSON.stringify(players, null, 2)}</pre>
    </Fragment>
  );
};

export default Form;
