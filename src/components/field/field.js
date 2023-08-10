import { FieldLayout } from "./field-layout";

import { PLAYER, STATUS } from "../../constants";
import { useSelector, useDispatch } from "react-redux";
import { checkWin, checkEmptyCell } from "../../utils";

export const Field = () => {
  const field = useSelector((state) => state.field);
  const status = useSelector((state) => state.status);
  const currentPlayer = useSelector((state) => state.currentPlayer);

  const dispatch = useDispatch();
  const handleCellClick = (cellIndex) => {
    if (
      status === STATUS.WIN ||
      status === STATUS.DRAW ||
      field[cellIndex] !== PLAYER.NOBODY
    ) {
      return;
    }

    const newField = [...field];

    newField[cellIndex] = currentPlayer;
    dispatch({ type: "SET_FIELD", payload: newField });

    if (checkWin(newField, currentPlayer)) {
      dispatch({ type: "SET_STATUS", payload: STATUS.WIN });
    } else if (checkEmptyCell(newField)) {
      const newCurrentPlayer =
        currentPlayer === PLAYER.CROSS ? PLAYER.NOUGHT : PLAYER.CROSS;
      dispatch({
        type: "SET_CURRENT_PLAYER",
        payload: newCurrentPlayer,
      });
    } else {
      dispatch({ type: "SET_STATUS", payload: STATUS.DRAW });
    }
  };
  return <FieldLayout field={field} handleCellClick={handleCellClick} />;
};
