import { Fragment, useState } from "react";
import Form from "./components/Form";
import Game from "./components/Game";
import { initialPlayersState } from "./constants/players";

const App = () => {
  const [players, setPlayers] = useState(initialPlayersState);
  const [gameStarted, setGameStarted] = useState(false);

  return (
    <Fragment>
      {gameStarted ? (
        <Game players={players} setPlayers={setPlayers} />
      ) : (
        <Form
          players={players}
          setPlayers={setPlayers}
          onSubmit={() => setGameStarted(true)}
        />
      )}
    </Fragment>
  );
};

export default App;
