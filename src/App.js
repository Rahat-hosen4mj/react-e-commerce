import React from "react";
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import About from "./About";
import Cart from "./Cart";
import Contact from "./Contact";
import ErrorPage from "./ErrorPage";
import Home from "./Home";
import Products from "./Products";
import SingleProduct from "./SingleProduct";

const App = () => {
  return <Router>
     <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/products" element={<Products />}></Route>
      <Route path="/contacts" element={<Contact />}></Route>
      <Route path="/singleProduct/:id" element={<SingleProduct />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="*" element={<ErrorPage />}></Route>
     </Routes>
  </Router>
};

export default App;
