import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import ProductPage from "./components/ProductPage";
import CartPage from "./components/CartPage";
import LoginForm from "./components/LoginForm";
import RegistrationForm from "./components/RegistrationForm";
import LoggedInScreen from "./components/LoggedInScreen";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      {/* Header component */}
      <Header />
      {/* Define routes */}
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route exact path="/login" element={<LoginForm />} />
        <Route exact path="/register" element={<RegistrationForm />} />
        <Route exact path="/logged-in" element={<LoggedInScreen />} />
      </Routes>
    </div>
  );
}
