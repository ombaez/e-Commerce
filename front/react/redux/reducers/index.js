import { combineReducers } from "redux";
import productsReducer from "./products-reducer";
import pageReducer from "./page-reducer";
import cartReducer from "./cart-reducer";

export default combineReducers({
  products: productsReducer,
  page: pageReducer,
  cart: cartReducer
});
