import { CART } from "../constants";

const initialState = {
  cart: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CART:
      return Object.assign({}, state, { cart: action.cart });
    default:
      return state;
  }
};
