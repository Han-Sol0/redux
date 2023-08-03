import { GameLayout } from "./game-layout";
import { handleCellClick, handleRestart } from "./handlers";
import { store } from "./constants/store";
import { useSelector } from "react-redux";

export const Game = () => {
  return <GameLayout />;
};
