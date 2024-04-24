import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Product from "../components/Product";
import axios from "axios";

import NavList from "../components/NavList";
import { Link } from "react-router-dom";
const CateProduct = () => {
  const { id } = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5001/api/category=${id}`)
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);
  const priceSaleData = (price, sale) => {
    let result = price * (1 - sale / 100);
    return result.toFixed(2);
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
          <NavList />
        </div>
        <div className="w-[70%]">
          <div className="flex justify-between flex-wrap mt-10 pl-3">
          {data.map((data) => (
          <div
            key={data.id}
            className="w-[30.3333%] px-2 border-2 border-yellow-500 mr-1 rounded-lg mt-3 z-0 relative"
          >
            <img src={data.image} alt="" className="w[100%] h-[300px]" />
            <Link to={`/Shop/${data.id}`} className="font-medium ">
              <p className="text-center p-2 text-xl truncate ">
                {data.name}
              </p>
            </Link>

            <div className="flex  justify-around p-2 font-medium">
              <p>{data.price} &#36; / kg</p>
             
                {(() => {
                  const priceSale = priceSaleData(data.price, data.sales)
                  console.log(priceSale);
                  console.log(data.price);
                  if (data.price == priceSale) {
                    return (
                       null
                    );
                  } else {
                    const salePrice = priceSaleData(data.price, data.sales);
                    return (
                      <p className="text-decoration-line-through text-red-500">
                        {salePrice} &#36; / kg{" "}
                      </p>
                    );
                  }
                })()}
              
            </div>

            <div className="absolute top-5 w-[90%]">
              {/* <p className="font-medium p-1 px-4 py-2"> Sold : 8</p> */}

              <div className="flex justify-between ">
               
              </div>
            </div>
          </div>
        ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CateProduct;
