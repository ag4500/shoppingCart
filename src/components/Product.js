import React from "react";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
const Product = ({ price, quantity, title }) => (
  <div>
    {title} - &#36;{price}
    {quantity ? ` x ${quantity}` : null}
  </div>
);
Product.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string,
};

export default Product;
