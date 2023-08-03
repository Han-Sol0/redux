import { useDispatch } from "react-redux";

export const handleRestart = () => {
  const dispatch = useDispatch();
  dispatch({ type: "RESTART_GAME" });
};
