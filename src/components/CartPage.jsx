import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../features/cart/cartSlice";
import { FaTrash } from "react-icons/fa";
import TotalPrice from "./TotalPrice";
import {
  Dropdown,
  Modal,
  Button,
  Alert,
  Card,
  Col,
  Row,
} from "react-bootstrap";
import HelpModal from "./HelpModal";
import { Formik, Form, Field, ErrorMessage } from "formik";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  const [shipmentMethod, setShipmentMethod] = useState("");
  const [showHelpModal, setShowHelpModal] = useState(false);
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [shippingMethodError, setShippingMethodError] = useState(false);

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeItem(itemId));
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    dispatch(updateQuantity({ itemId, newQuantity }));
  };

  const handleShipmentSelect = (method) => {
    setShipmentMethod(method);
    setShippingMethodError(false);
  };

  const handleCheckout = () => {
    if (!shipmentMethod) {
      setShippingMethodError(true);
      return;
    }
    setShowCheckoutModal(true);
  };

  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">Your Cart</h1>
      <Row xs={1} md={2} lg={3} className="g-4">
        {cartItems.map((item) => (
          <Col key={item.id}>
            <Card>
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Card.Text>{`$${item.price}`}</Card.Text>
                <Card.Text>{`Total: $${item.price * item.quantity}`}</Card.Text>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="quantity-control">
                    <button
                      className="btn btn-outline-primary btn-sm"
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity - 1)
                      }
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="btn btn-outline-primary btn-sm"
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => handleRemoveFromCart(item.id)}
                  >
                    <FaTrash />
                  </button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <TotalPrice />
      <div className="text-center my-3">
        <h4>Select Shipping Method:</h4>
        <Dropdown>
          <Dropdown.Toggle variant="info" id="dropdown-basic">
            {shipmentMethod ? shipmentMethod : "Select Method"}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => handleShipmentSelect("Standard")}>
              Standard
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleShipmentSelect("Express")}>
              Express
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        {shippingMethodError && (
          <Alert variant="danger" className="mt-2">
            Please select a shipping method.
          </Alert>
        )}
      </div>
      <div className="text-center my-3">
        <Button variant="info" onClick={() => setShowHelpModal(true)}>
          Help
        </Button>
      </div>
      <Modal show={showHelpModal} onHide={() => setShowHelpModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Shipping Options</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <HelpModal />
        </Modal.Body>
        <Modal.Footer>
          <button
            className="btn btn-secondary"
            onClick={() => setShowHelpModal(false)}
          >
            Close
          </button>
        </Modal.Footer>
      </Modal>
      <Modal
        show={showCheckoutModal}
        onHide={() => setShowCheckoutModal(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Checkout</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={{ name: "", email: "" }}
            validate={(values) => {
              const errors = {};
              if (!values.name) {
                errors.name = "Required";
              }
              if (!values.email) {
                errors.email = "Required";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <Field type="text" name="name" className="form-control" />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <Field type="email" name="email" className="form-control" />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isSubmitting}
                >
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
      <div className="text-center my-3">
        <Button variant="success" onClick={handleCheckout}>
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
};

export default CartPage;
