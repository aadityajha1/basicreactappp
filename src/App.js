import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Users from "./components/users";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./components/products";
import Home from "./components/home";
function App() {
  return (
    <>
      {/* <BrowserRouter basename="/app"> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
