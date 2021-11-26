import shop from "../api/shop";
import * as types from "../constants/ActionTypes";
const receiveProducts = (products) => ({
  type: types.RECEIVE_PRODUCTS,
  products,
});
export const getAllProducts = () => (dispatch) => {
  shop.getProducts((products) => {
    dispatch(receiveProducts(products));
  });
};
const addToCartUnsafe = (productId) => ({
  type: types.ADD_TO_CART,
  productId,
});
export const addToCart = (productId) => (dispatch, getState) => {
  if (getState().products.byId[productId].inventory > 0) {
    dispatch(addToCartUnsafe(productId));
  }
};
export const checkout = (products, total) => (dispatch, getState) => {
  const { cart } = getState();
  const { login } = getState();
  login.loggedIn
    ? dispatch({
        type: types.CHECKOUT_REQUEST,
      })
    : console.log("please LogIn");
  login.loggedIn
    ? shop.buyProducts(products, () => {
        dispatch({
          type: types.CHECKOUT_SUCCESS,
          cart,
        });
        let productData = {
          product: products,
          date: new Date().toLocaleString(),
          total: total,
        };
        let getdata = localStorage.getItem("historydata") || "[]";
        let parsedata = JSON.parse(getdata);
        localStorage.setItem(
          "historydata",
          JSON.stringify(parsedata.concat(productData))
        );
      })
    : alert("Please Login with valid username and password");
};
export const showHide = (payload) => ({
  type: types.ShowHide,
  payload,
});
export const setuser = (payload) => ({
  type: types.SetUsers,
  payload,
});
export const loggedin = (payload) => ({
  type: types.LoggedIn,
  payload,
});
