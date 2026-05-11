import { useReducer } from "react";

const initialState = {
  count: 0,
  count1: 100,
  count2: 20,
};

function reducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case "INC_ONE":
      return { ...state, count: state.count + 1 };
    case "INC_TWO":
      return { ...state, count1: state.count1 + 1 };
    case "INC_THREE":
      return { ...state, count2: state.count2 + 1 };
    default:
      return state;
  }
}

export function useCounterReducer() {
  return useReducer(reducer, initialState);
}
