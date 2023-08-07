import { GameLayout } from "./game-layout";
import { handleCellClick, handleRestart } from "./handlers";
import { store } from "./constants/store";
import { useSelector } from "react-redux";

export const Game = () => {
  const [status, setStatus] = useState(state.STATUS.TURN);
  const [currentPlayer, setCurrentPlayer] = useState(state.PLAYER.CROSS);
  return <GameLayout status={status} currentPlayer={currentPlayer} />;
};
