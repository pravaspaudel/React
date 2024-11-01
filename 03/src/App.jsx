import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Shop from "./Page/shop";
import ShopCategory from "./Page/ShopCategory";
import Product from "./Page/Product";
import Cart from "./Page/Cart";
import LoginSignup from "./Page/LoginSignup";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/men" element={<ShopCategory category="men" />} />
          <Route path="/women" element={<ShopCategory category="women" />} />
          <Route path="/kid" element={<ShopCategory category="kid" />} />

          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>

          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
