import axios from "axios";
import {
  RECEIVE_PRODUCTS,
  RECEIVE_SEARCH,
  FILTERED,
  PAGINATOR,
  RESULTS,
  CURRENT_PAGE,
  CART,
  VIEW
} from "../constants";

export const receiveProducts = products => ({
  type: RECEIVE_PRODUCTS,
  products
});

export const getCart = cart => ({
  type: CART,
  cart
});

export const receiveSearchInput = input => ({
  type: RECEIVE_SEARCH,
  input
});

export const receiveFiltered = array => ({
  type: FILTERED,
  array
});

export const slicerPaginator = array => ({
  type: PAGINATOR,
  array
});

export const showResults = length => ({
  type: RESULTS,
  length
});

export const currentPaginated = page => ({
  type: CURRENT_PAGE,
  page
});

export const viewSetter = view => ({
  type: VIEW,
  view
});

export const slicer = (array, itemsPerPage, numberPage) => dispatch => {
  const indexOfLastItem = numberPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = array.slice(indexOfFirstItem, indexOfLastItem);
  dispatch(currentPage(numberPage));
  dispatch(slicerPaginator(currentItems));
};

export const listItems = () => dispatch => {
  return axios
    .get("https://api.myjson.com/bins/wyjyh")
    .then(res => res.data)
    .then(products => dispatch(receiveProducts(products)));
};

export const receiveSearch = input => dispatch =>
  dispatch(receiveSearchInput(input));

export const viewToggler = view => dispatch => dispatch(viewSetter(view));

export const filtered = (array, input) => dispatch => {
  const filtered = array.filter(
    item => item.name.toLowerCase().indexOf(input.toLowerCase()) > -1
  );
  let len = filtered.length;
  dispatch(receiveFiltered(filtered));
  dispatch(showResults(len));
};

export const currentPage = page => dispatch => dispatch(currentPaginated(page));

export const addToCart = products => {
  var cart = JSON.parse(localStorage.getItem("products"));
  if (!cart) {
    localStorage.setItem("products", JSON.stringify(products));
  } else {
    var check = Object.keys(products);
    if (cart[check[0]]) {
      var qtyProd = Number(cart[check[0]]);
      var qtyInCart = products[check];
      var qtyPlus = qtyProd + qtyInCart;
      var productAlready = { [check]: Number(qtyPlus) };
      var addProdToCart = { ...cart, ...productAlready };
      localStorage.setItem("products", JSON.stringify(addProdToCart));
    } else {
      var addProdToCart = { ...cart, ...products };
      localStorage.setItem("products", JSON.stringify(addProdToCart));
    }
  }
};

export const clearLocal = () => dispatch => {
  localStorage.clear();
  dispatch(getCart({}));
};

export const getCartLocal = () => {
  var cart = JSON.parse(localStorage.getItem("products"));
  return cart;
};

export const getCartLocalBuyed = cart => dispatch => {
  dispatch(getCart(cart));
};
