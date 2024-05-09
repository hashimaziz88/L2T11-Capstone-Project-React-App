import React from "react";
import { Container, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";
import { Navigate } from "react-router-dom";
import "./styles/LoggedInScreen.css"; // Import CSS for styling

// LoggedInScreen component to display content for logged-in users
const LoggedInScreen = () => {
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.auth.loggedInUser);

  // Function to handle logout
  const handleLogout = () => {
    dispatch(logout());
  };

  // Redirect to login page if user is not logged in
  if (!loggedInUser) {
    return <Navigate to="/login" />;
  }

  // Render content for logged-in users
  return (
    // Container for content
    <div className="logged-in-container">
      <Container>
        {/* Welcome message for logged-in user */}
        <h2 className="welcome-message">Welcome, {loggedInUser}!</h2>
        {/* Message indicating user is logged in */}
        <p className="login-message">You are now logged in.</p>
        {/* Button to logout */}
        <Button variant="primary" onClick={handleLogout} className="logout-btn">
          Logout
        </Button>
      </Container>
    </div>
  );
};

export default LoggedInScreen;
