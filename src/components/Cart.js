import React from "react";
import PropTypes from "prop-types";
import Product from "./Product";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
const Cart = ({ products, total, onCheckoutClicked, logged }) => {
  const hasProducts = products.length > 0;
  let historys = useHistory();
  const date = new Date().toLocaleString();
  useEffect(() => {
    historys.push({
      state: { data: products, total: total, date: date },
    });
    if (!localStorage.getItem("history")) {
      localStorage.setItem("history", JSON.stringify(historys.location.state));
    } else {
      return []
    }
  }, []);
  const nodes = hasProducts ? (
    products.map((product) => (
      <Product
        title={product.title}
        price={product.price}
        quantity={product.quantity}
        key={product.id}
      />
    ))
  ) : (
    <em>Please add some products to cart.</em>
  );
  return logged.loggedIn ? (
    <div>
      <h3>Your Cart</h3>
      <div>{nodes}</div>
      <p>Total: &#36;{total}</p>
      <button
        onClick={onCheckoutClicked}
        disabled={hasProducts ? "" : "disabled"}
      >
        Checkout
      </button>
    </div>
  ) : (
    <h4 className="my-3 container text-center">
      Please Logged In to use checkout
    </h4>
  );
};
Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func,
};
export default Cart;
