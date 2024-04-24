import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

import panner2 from "../assets/sales Product/banner2.jpg";
import Product from "../components/Product";
import NavList from "../components/NavList";
import { useState } from "react";
import axios from "axios";
const Shop = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [datas, setData] = useState([]);

  const priceSaleData = (price, sale) => {
    let result = price * (1 - sale / 100);
    return result.toFixed(2);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5001/api/products/search/${searchTerm}`
      );
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const processProduct = () => {
    if (datas.length === 0) {
      return <Product />;
    } else {
      return datas.map((data, index) => (
        <div
          key={data.id}
          className="w-[30.3333%] px-2 border-2 border-yellow-500 mr-1 rounded-lg mt-3"
        >
          <img src={data.image} alt="" className="w[100%] h-[300px]" />
          <Link to={`/Shop/${data.id}`} className="font-medium">
            <p className="text-center p-2 text-xl">{data.name}</p>
          </Link>
          <div className="flex justify-around p-2 font-medium">
            <p>{data.price} &#36; / kg</p>
            <p className="text-decoration-line-through text-red-500">
              {priceSaleData(data.price, data.sales)} &#36; / kg{" "}
            </p>
          </div>
          <div>
            <button
              type=""
              className="bg-color-layout px-14 py-1 my-3 translate-x-8 border-2 border-yellow-500 text-white rounded-full"
            >
              Add To Cart
            </button>
          </div>
        </div>
      ));
    }
  };

  return (
    <div>
      <div className="image-banner relative">
        <p className="text-4xl text-white font-bold  absolute top-2 left-2/4 translate-y-16">
          Shop
        </p>
        <p className="text-xl text-color-layout absolute top-28 left-[49%] py-2">
          <Link to="/home">Home</Link> / <Link to="/shop">Shop</Link>
        </p>
      </div>
      <div className="container-lg flex mt-10 pt-6">
        <div className="w-[20%]">
          <p className="text-3xl text-gray-700 font-medium">Fresh Fruit Shop</p>
          <div className="relative">
            <input
              type=""
              name=""
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Keywords"
              className="h-[56px] w-[100%] border-2 border-gray-500 rounded-full mt-3  px-4"
            />

            <button
              type="submit"
              onClick={handleSearch}
              className="h-[56px] bg-color-layout px-4 rounded-full absolute top-4 right-0"
            >
              <FaSearch />
            </button>
          </div>

          <NavList />

          <div className="mt-10">
            <img src={panner2} alt="" />
          </div>
        </div>
        <div className="w-[70%]">{processProduct()}</div>
      </div>
    </div>
  );
};

export default Shop;
