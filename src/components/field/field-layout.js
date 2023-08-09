import { PLAYER_SIGN } from "../../constants";
import styles from "./field.module.css";

export const FieldLayout = ({ field, handleCellClick }) => (
  /*  const field = useSelector((state) => state.field);
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

    dispatch({ type: "Set_Field", payload: newField });

    if (checkWin(newField, currentPlayer)) {
      dispatch({ type: "Set_Status", payload: STATUS.WIN });
    } else if (checkEmptyCell(newField)) {
      const newCurrentPlayer =
        currentPlayer === PLAYER.CROSS ? PLAYER.NOUGHT : PLAYER.CROSS;
      dispatch({
        type: "Set_Current_Player",
        payload: newCurrentPlayer,
      });
    } else {
      dispatch({ type: "Set_Status", payload: STATUS.DRAW });
    }
  }; */
  <div className={styles.field}>
    {field.map((cellPlayer, index) => (
      <button
        key={index}
        className={styles.cell}
        onClick={() => handleCellClick(index)}
      >
        {PLAYER_SIGN[cellPlayer]}
      </button>
    ))}
  </div>
);
