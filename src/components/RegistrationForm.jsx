// RegistrationForm.js
import React, { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../features/auth/authSlice";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegistration = async (values, actions) => {
    try {
      // Dispatch register action with the registration data
      await dispatch(register(values));
      setIsRegistered(true);
      // Reset form fields after successful registration
      actions.resetForm();
    } catch (error) {
      console.error("Registration failed:", error);
    } finally {
      actions.setSubmitting(false);
    }
  };

  return (
    <div className="container" style={{ padding: "20px" }}>
      <Container>
        {/* Display the registration form */}
        <h2>Registration</h2>
        <Formik
          // Set initial form values for first name, surname, username, email, and password
          initialValues={{
            firstName: "",
            surname: "",
            username: "",
            email: "",
            password: "",
          }}
          // Define validation rules for the form fields
          validate={(values) => {
            const errors = {};
            // Validate first name field
            if (!values.firstName) {
              errors.firstName = "Required";
            }
            // Validate surname field
            if (!values.surname) {
              errors.surname = "Required";
            }
            // Validate username field
            if (!values.username) {
              errors.username = "Required";
            }
            // Validate email field
            if (!values.email) {
              errors.email = "Required";
            } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
              errors.email = "Invalid email address";
            }
            // Validate password field
            if (!values.password) {
              errors.password = "Required";
            }
            return errors;
          }}
          // Handle form submission
          onSubmit={(values, actions) => handleRegistration(values, actions)}
        >
          {(formik) => (
            // Use Formik's render prop pattern to render the form
            <Form onSubmit={formik.handleSubmit}>
              {isRegistered && (
                <Alert
                  variant="success"
                  onClose={() => setIsRegistered(false)}
                  dismissible
                >
                  Registration Successful!
                </Alert>
              )}

              {/* First Name field */}
              <Form.Group controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter first name"
                  {...formik.getFieldProps("firstName")}
                  isInvalid={
                    formik.touched.firstName && formik.errors.firstName
                  }
                />
                {/* Display error message if first name field is invalid */}
                <Form.Control.Feedback type="invalid">
                  {formik.errors.firstName}
                </Form.Control.Feedback>
              </Form.Group>

              {/* Surname field */}
              <Form.Group controlId="surname">
                <Form.Label>Surname</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter surname"
                  {...formik.getFieldProps("surname")}
                  isInvalid={formik.touched.surname && formik.errors.surname}
                />
                {/* Display error message if surname field is invalid */}
                <Form.Control.Feedback type="invalid">
                  {formik.errors.surname}
                </Form.Control.Feedback>
              </Form.Group>

              {/* Username field */}
              <Form.Group controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter username"
                  {...formik.getFieldProps("username")}
                  isInvalid={formik.touched.username && formik.errors.username}
                />
                {/* Display error message if username field is invalid */}
                <Form.Control.Feedback type="invalid">
                  {formik.errors.username}
                </Form.Control.Feedback>
              </Form.Group>

              {/* Email field */}
              <Form.Group controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  {...formik.getFieldProps("email")}
                  isInvalid={formik.touched.email && formik.errors.email}
                />
                {/* Display error message if email field is invalid */}
                <Form.Control.Feedback type="invalid">
                  {formik.errors.email}
                </Form.Control.Feedback>
              </Form.Group>

              {/* Password field */}
              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  {...formik.getFieldProps("password")}
                  isInvalid={formik.touched.password && formik.errors.password}
                />
                {/* Display error message if password field is invalid */}
                <Form.Control.Feedback type="invalid">
                  {formik.errors.password}
                </Form.Control.Feedback>
              </Form.Group>

              {/* Submit button */}
              <Button
                variant="primary"
                type="submit"
                disabled={formik.isSubmitting}
              >
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </Container>
    </div>
  );
};

export default RegistrationForm;
