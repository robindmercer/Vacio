
import {
  GET_TABLA
} from "../actions/constant.js";
const initialState = {
  tabla: [],
};

// Reducer to get foods ordered by alphabet
const rootReducer = (state = initialState, action) => {
  if (action.type === GET_TABLA) {
    return {
      ...state,
      tabla: action.payload,
    };
  }

  return state;
};

export default rootReducer;
