import PropTypes from "prop-types";
import { PLAYER } from "../../constants";
import styles from "./field.module.css";
import { useSelector, useStore, useDispatch } from "react-redux";

export const FieldLayout = () => {
  const field = useSelector((state) => state.field);
  const PLAYER_SIGN = useSelector((state) => state.PLAYER_SIGN);

  const dispatch = useDispatch();
  const handleCellClick = (index) => {
    dispatch({ type: "CELL_CLICK", payload: index });
  };
  return (
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
};

FieldLayout.propTypes = {
  field: PropTypes.arrayOf(
    PropTypes.oneOf([PLAYER.CROSS, PLAYER.NOUGHT, PLAYER.NOBODY])
  ),
  handleCellClick: PropTypes.func,
};
