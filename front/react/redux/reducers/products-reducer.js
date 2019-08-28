import { RECEIVE_PRODUCTS, RECEIVE_SEARCH, FILTERED } from "../constants";

const initialState = {
  list: [],
  input: "",
  filtered: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return Object.assign({}, state, { list: action.products });
    case RECEIVE_SEARCH:
      return Object.assign({}, state, { input: action.input });
    case FILTERED:
      return Object.assign({}, state, { filtered: action.array });
    default:
      return state;
  }
};
