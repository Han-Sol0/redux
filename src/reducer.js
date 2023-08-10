import { STATUS, PLAYER } from "./constants";

export const initialState = {
  status: STATUS.TURN,
  currentPlayer: PLAYER.CROSS,
  field: new Array(9).fill(PLAYER.NOBODY),
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_FIELD":
      return { ...state, field: payload };
    case "SET_STATUS":
      return { ...state, status: payload };
    case "SET_CURRENT_PLAYER":
      return { ...state, currentPlayer: payload };
    case "RESTART_GAME":
      return initialState;
    default:
      return state;
  }
};
