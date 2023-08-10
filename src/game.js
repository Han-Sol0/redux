import { GameLayout } from "./game-layout";
import { useDispatch } from "react-redux";

export const Game = () => {
  const dispatch = useDispatch();
  const handleRestart = () => {
    dispatch({ type: "RESTART_GAME" });
  };
  return <GameLayout handleRestart={handleRestart} />;
};
