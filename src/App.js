import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";

import HomePage from "./pages/home";
import RestaurantsPage from "./pages/restaurants";
import RestaurantDetails from "./pages/restaurants/RestaurantDetails";
import CartPage from "./pages/cart";
import CheckoutPage from "./pages/checkout";
import FoodDetails from "./pages/food";

import LoginPage from "./pages/auth/Login";
import RegisterPage from "./pages/auth/Register";
import DeleteAccount from "./pages/auth/DeleteAccount";

import Dashboard from "./pages/dashboard";

import PrivacyPolicy from "./pages/info/PrivacyPolicy";
import Terms from "./pages/info/Terms";
import AboutUs from "./pages/info/AboutUs";

import OffersPage from "./pages/offers";
import ContactPage from "./pages/contact";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/restaurants" element={<RestaurantsPage />} />
        <Route path="/restaurants/:id" element={<RestaurantDetails />} />

        <Route path="/food/:id" element={<FoodDetails />} />

        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/offers" element={<OffersPage />} />
        <Route path="/contact" element={<ContactPage />} />

        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<Terms />} />
        <Route path="/about-us" element={<AboutUs />} />

        <Route path="/delete-account" element={<DeleteAccount />} />

        <Route path="*" element={<div>404</div>} />
      </Routes>
    </Layout>
  );
};

export default App;