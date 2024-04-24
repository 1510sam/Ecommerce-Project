import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import News from "../pages/News";
import Post from "../pages/Post";
import Register from "../pages/Register";
import Shopdetail from "../pages/Shopdetail";
import Shop from "../pages/Shop";
import CateProduct from "../pages/CateProduct";
import UserDetail from "../pages/UserDetail";
import Checkout from "../pages/Checkout";
import UserPost from "../pages/UsePost";
import NewsDetail from "../pages/NewsDetail";
import PostDetail from "../pages/Postdetails";
const Routers = () => {
  const [cart, setCart] = useState([]);
  const addToCard = (items) => {
    const newCart = [...cart];
    newCart.push(items);
    setCart(newCart);
  };

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/Shop" element={<Shop />} />
      <Route path="/Shop/:id" element={<Shopdetail />} />
      <Route path="/category/:id" element={<CateProduct />} />
      <Route path="/News" element={<News />} />
      <Route path="/News/:id" element={<NewsDetail />} />
      <Route path="/Post" element={<Post />} />
      <Route path="/PostDetails/:id" element={<PostDetail />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Cart" element={<Cart cart={cart} />} />
      <Route path="/home" element={<Navigate />} />
      <Route path="/UserDetail" element={<UserDetail />} />
      <Route path="/Checkout" element={<Checkout />} />
      <Route path="/UserPost" element={<UserPost />} />
    </Routes>
  );
};

export default Routers;
