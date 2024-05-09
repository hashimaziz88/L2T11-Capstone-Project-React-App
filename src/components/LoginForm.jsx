import React from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/auth/authSlice";
import { Navigate } from "react-router-dom";
import "./styles/LoginForm.css"; // Import CSS for styling

// LoginForm component to display login form
const LoginForm = () => {
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.auth.loggedInUser);
  const users = useSelector((state) => state.auth.users);

  // Redirect to logged-in screen if user is already logged in
  if (loggedInUser) {
    return <Navigate to="/logged-in" />;
  }

  return (
    // Container for content
    <div className="login-form-container">
      <Container>
        {/* Display the Login form */}
        <h2 className="login-header">Login</h2>
        {/* Formik form for login */}
        <Formik
          // Set initial form values for username
          initialValues={{ username: "" }}
          // Define validation rules for the form fields
          validate={(values) => {
            const errors = {};
            // Validate username field
            if (!values.username) {
              errors.username = "Username is required";
            } else if (
              !users.find((user) => user.username === values.username)
            ) {
              errors.username = "Invalid username";
            }
            return errors;
          }}
          // Handle form submission
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              // Dispatch login action with the username
              dispatch(login(values.username));
              setSubmitting(false);
            }, 400);
          }}
        >
          {(formik) => (
            // Use Formik's render prop pattern to render the form
            <Form onSubmit={formik.handleSubmit}>
              {/* Username field */}
              <Form.Group controlId="username">
                <Form.Control
                  type="text"
                  placeholder="Enter username"
                  {...formik.getFieldProps("username")}
                  isInvalid={formik.touched.username && formik.errors.username}
                  className="username-field"
                />
                {/* Display error message if username field is invalid */}
                <Form.Control.Feedback type="invalid">
                  {formik.errors.username}
                </Form.Control.Feedback>
              </Form.Group>

              {/* Submit button */}
              <Button
                variant="primary"
                type="submit"
                disabled={formik.isSubmitting}
                className="submit-btn"
              >
                {formik.isSubmitting ? "Logging in..." : "Login"}
              </Button>

              {/* Display login error message */}
              {formik.status && (
                <Alert variant="danger" className="login-error">
                  {formik.status}
                </Alert>
              )}
            </Form>
          )}
        </Formik>
      </Container>
    </div>
  );
};

export default LoginForm;
