import {
  STATUS,
  PLAYER,
  PLAYER_ACTION,
  PLAYER_NAME,
  PLAYER_SIGN,
  WIN_PATTERNS,
} from "./constants";

export const initialState = {
  STATUS,
  PLAYER,
  PLAYER_ACTION,
  PLAYER_NAME,
  PLAYER_SIGN,
  WIN_PATTERNS,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "RESTART_GAME":
      return initialState;
    default:
      return state;
  }
};
