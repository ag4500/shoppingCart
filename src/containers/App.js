import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import ProductsContainer from "./ProductsContainer";
import CartContainer from "./CartContainer";
import GetHistory  from '../components/history'
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container } from "react-bootstrap";
const App = () => (
  <>
    <Router>
      <div className="App">
        <Navbar>
          <Container>
            <Navbar.Brand href="/">Shopping Cart</Navbar.Brand>
            <Nav className="me-auto">
              <LinkContainer to="/products">
                <Nav.Link>Product</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/cart">
                <Nav.Link>Cart</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/history">
                <Nav.Link>History</Nav.Link>
              </LinkContainer>
            </Nav>
          </Container>
        </Navbar>
      </div>
      <Switch>
        <Route exact path="/products" component={ProductsContainer} />
        <Route exact path="/cart" component={CartContainer} />
        <Route exact path="/history" component={GetHistory } />
      </Switch>
    </Router>


  </>
);

export default App;
