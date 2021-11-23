import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Button, Toast } from "react-bootstrap";
import { showHide, loggedin } from "../actions";
import LogIn from "./form";
const ProductsList = ({ title, children, toggles, showHide, loggedin }) => (
  <div className="container my-2">
    {toggles.loggedIn ? (
      <>
        <Toast className="my-2">
          <Toast.Body>UserLoggedIn Successfully</Toast.Body>
          
        </Toast>
        <Button
          variant="success"
          type="submit"
          onClick={() => loggedin(!toggles.loggedIn)}
        >
          Logout
        </Button>{" "}
      </>
    ) : (
      <Button
        type="submit"
        variant="danger"
        onClick={() => showHide(!toggles.toggle)}
      >
        Login
      </Button>
    )}

    {toggles.toggle ? <LogIn /> : undefined}
    <h3 className="my-3">{title}</h3>
    <div>{children}</div>
  </div>
);

ProductsList.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
};
const mapStateToProps = (state) => ({
  toggles: state.login,
});
const mapDispatchToProps = {
  showHide,
  loggedin,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);

//export default ProductsList
