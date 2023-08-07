import {
  STATUS,
  PLAYER,
  PLAYER_ACTION,
  PLAYER_NAME,
  PLAYER_SIGN,
  WIN_PATTERNS,
} from "./constants";

import { useState } from "react";

export const initialState = {
  STATUS,
  PLAYER,
  PLAYER_ACTION,
  PLAYER_NAME,
  PLAYER_SIGN,
  WIN_PATTERNS,
  field: new Array(9).fill(""),
};

export const reducer = (state = initialState, action) => {
  const [status, setStatus] = useState(state.STATUS.TURN);
  const [currentPlayer, setCurrentPlayer] = useState(state.PLAYER.CROSS);

  switch (action.type) {
    case "CELL_CLICK":
      if (
        state.STATUS === state.STATUS.WIN ||
        state.STATUS === state.STATUS.DRAW ||
        state.field[action.payload] !== state.PLAYER.NOBODY
      ) {
        return;
      }

      const newField = [...state.field];

      newField[action.payload] = currentPlayer;

      return { ...state, field: newField };

      if (checkWin(newField, currentPlayer)) {
        setStatus(state.STATUS.WIN);
      } else if (checkEmptyCell(newField)) {
        setCurrentPlayer(
          currentPlayer === state.PLAYER.CROSS
            ? state.PLAYER.NOUGHT
            : state.PLAYER.CROSS
        );
      } else {
        setStatus(state.STATUS.DRAW);
      }
    case "RESTART_GAME":
      return initialState;
    default:
      return state;
  }
};
