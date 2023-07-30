import { useState } from "react";
import { createEmptyField } from "./utils";
import { STATUS, PLAYER } from "./constants";

const [status, setStatus] = useState(STATUS.TURN);
const [currentPlayer, setCurrentPlayer] = useState(PLAYER.CROSS);
const [field, setField] = useState(createEmptyField());
const state = {
  status,
  setStatus,
  currentPlayer,
  setCurrentPlayer,
  field,
  setField,
};

export const initialState = state;

export const appReducer = (state = initialState, action) => {
  return state;
};
