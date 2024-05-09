import React from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";

const TotalPrice = () => {
  const cartItems = useSelector((state) => state.cart);
  const totalPrice = useSelector((state) => calculateTotalPrice(state.cart));

  return (
    <div className="container" >
      {/* Cart Total */}
      <Card className="mt-3">
        <Card.Body>
          <Card.Title>Cart Total</Card.Title>
          <Card.Text>Total Price: ${totalPrice}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

// Function to calculate total price
const calculateTotalPrice = (cartItems) => {
  return cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
};

export default TotalPrice;
