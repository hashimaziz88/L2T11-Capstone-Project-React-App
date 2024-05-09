// Header component for navigation
import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import "./styles/NavScrollExample.css";

function Header() {
  // Get cart items count and total price from Redux store
  const cartItemsCount = useSelector((state) =>
    state.cart.reduce((total, item) => total + item.quantity, 0)
  );
  const totalPrice = useSelector((state) =>
    state.cart.reduce((total, item) => total + item.price * item.quantity, 0)
  );

  return (
    // Navbar component
    <Navbar className="navbar" expand="lg">
      <Navbar.Brand as={Link} to="/" className="brand">
        Brand
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {/* Navigation links */}
          <Nav.Link as={Link} to="/" className="nav-link">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/products" className="nav-link">
            Products
          </Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          {/* Cart button */}
          <Button
            as={Link}
            to="/cart"
            variant="outline-light"
            className="cart-btn"
          >
            <FaShoppingCart className="cart-icon" />
            <span className="cart-badge">{cartItemsCount}</span>
          </Button>
          {/* Total price */}
          <Button variant="outline-light" disabled className="total-price">
            Total: ${totalPrice.toFixed(2)}
          </Button>
          {/* Auth buttons */}
          <Button
            as={Link}
            to="/login"
            variant="outline-light"
            className="auth-btn"
          >
            Login
          </Button>
          <Button
            as={Link}
            to="/register"
            variant="outline-light"
            className="auth-btn"
          >
            Register
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
