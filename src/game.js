import { GameLayout } from "./game-layout";
import { handleCellClick, handleRestart } from "./handlers";
import { store } from "./constants/store";

export const Game = () => {
  console.log(store.getState());
  return (
    <GameLayout
      status={store.status}
      currentPlayer={store.currentPlayer}
      field={store.field}
      handleCellClick={(cellIndex) => handleCellClick(store.state, cellIndex)}
      handleRestart={() => handleRestart(store.state)}
    />
  );
};
