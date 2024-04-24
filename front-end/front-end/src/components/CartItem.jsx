import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
import axios from "axios";
const CartItem = () => {
  const [data, setData] = useState({});

  const token = localStorage.getItem("userId");
  useEffect(() => {
    axios
      .get(`http://localhost:5001/api/v1/showCart/${token}`)
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(data);
  const countData = ()=>{
    const count = Object.keys(data).length;
    return count
  }
  console.log(countData());

  useEffect(() => {
    const count = countData();
    console.log("Số lượng phần tử đã cập nhật:", count);
  }, [data]);
  return (
    <div className="relative mt-1">
      <p className="rounded-full px-2 bg-yellow-500 absolute left-7 text-white">
        {countData()}
      </p>
      <Link to="/cart" className="  text-4xl py-1 hover:text-yellow-500 ">
        <FaShoppingBag className="" />
      </Link>
    </div>
  );
};

export default CartItem;
