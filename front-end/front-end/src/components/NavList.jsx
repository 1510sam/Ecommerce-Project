import React from 'react'
import productsales1 from "../assets/sales Product/featur-1-1.jpg";
import productsales2 from "../assets/sales Product/featur-2.jpg";
import productsales3 from "../assets/sales Product/featur-3.jpg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import banner from '../assets/sales Product/banner2.jpg';
import axios from "axios";
const NavList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      axios
        .get("http://localhost:5001/api/category")
        .then((res) => setData(res.data))
        .catch((err) => console.log(err));
    }, []);
  
  const productSales = [
    {
      id: "1",
      name: "Big Banana",
      image: productsales1,
      price: 55,
      priceSale: 43,
    },
    {
      id: "2",
      name: "Big Banana",
      image: productsales2,
      price: 55,
      priceSale: 43,
    },
    {
      id: "3",
      name: "Big Banana",
      image: productsales3,
      price: 55,
      priceSale: 43,
    },
  ];
  return (
    <div>
          <div>
            <p className="text-2xl font-medium py-3">Category</p>
            <ul className="text-color-layout ">
              {data.map((data, index) => {
                return (
                  <li className="py-2" key={data.id}>
                    <Link to={`/category/${data.id}`}>{data.name}</Link>
                  </li>
                );
              })}
            </ul>

            <p className="text-2xl pt-5">Feature Products</p>
            <div>
              {productSales.map((prroductListSale, index) => (
                <div className="flex py-2" key={index}>
                  <div className="">
                    <img
                      src={prroductListSale.image}
                      alt=""
                      className="w-[90px]"
                    />
                  </div>
                  <div className="">
                    <p className="text-gray-500 font-medium hover:text-yellow-500">
                      {prroductListSale.name}
                    </p>
                    <p className="">
                      {prroductListSale.priceSale} &#36;{" "}
                      <span className="text-decoration-line-through text-red-400">
                        {prroductListSale.price} &#36;
                      </span>{" "}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <button
              type=""
              className="w-[100%] border-2 border-yellow-500 p-3 rounded-full text-color-layout font-medium hover:scale-110 hover:bg-yellow-500 hover:text-white mt-2"
            >
              View More
            </button>
          <div>
              <img src={banner} alt="" />
          </div>
          </div>
    </div>
  )
}

export default NavList