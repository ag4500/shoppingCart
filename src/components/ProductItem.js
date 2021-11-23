import React from "react";
import PropTypes from "prop-types";
import Product from "./Product";
import { Button } from "react-bootstrap";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
const ProductItem = ({ product, onAddToCartClicked }) => {
  return (
    <>
      <div className="container my-3" style={{ marginBottom: 20 }}>
        <Product
          title={product.title}
          price={product.price}
          quantity={product.inventory}
        />
        <Button
          variant="info"
          onClick={onAddToCartClicked}
          disabled={product.inventory > 0 ? "" : "disabled"}
        >
          {product.inventory > 0 ? "Add to cart" : "Sold Out"}
        </Button>
      </div>
    </>
  );
};

ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired,
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired,
};

export default ProductItem;
