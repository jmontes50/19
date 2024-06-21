import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./context/authContext";
import { CartContextProvider } from "./context/cartContext";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import AllProductView from "./views/AllProductView";
import ProductDetailView from "./views/ProductDetailView";
import LoginView from "./views/LoginView";
import CartView from "./views/CartView";
import { ToastContainer } from "react-toastify";
import React from 'react';
import 'react-toastify/dist/ReactToastify.css';

// import Counter from "./components/Counter";

const App = () => {
  return (
    <Router>
      <AuthContextProvider>
        <CartContextProvider>
          {/* <Counter /> */}
          <Navbar />
          <Routes>
            <Route path="/" element={<AllProductView />} />
            <Route path="/product/:id" element={<ProductDetailView />} />
            <Route path="/login" element={<LoginView />} />
            <Route
              path="/cart"
              element={
                <ProtectedRoute>
                  <CartView />
                </ProtectedRoute>
              }
            />
          </Routes>
          <ToastContainer />
        </CartContextProvider>
      </AuthContextProvider>
    </Router>
  );
};

export default App;
