import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Shopdetail from "../pages/Shopdetail";
import "./CartItem";
import axios from "axios";

const Product = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [data, setData] = useState([]);
  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);

    console.log(selectedValue);
  };
  console.log();
  useEffect(() => {
    axios
      .post(`http://localhost:5001/products/sql`, {
        valueSort: selectedValue,
      })
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, [selectedValue]);

  const priceSaleData = (price, sale) => {
    let result = price * (1 - sale / 100);
    return result.toFixed(2);
  };

  const testname = (nameCate) => {
    if (nameCate === "Vegetable") {
      return (
        <div className="bg-green-600 p-2 rounded-lg font-medium text-white ">
          {nameCate}
        </div>
      );
    } else if (nameCate === "Fruit") {
      return (
        <div className="bg-yellow-500 p-2 rounded-lg font-medium text-white">
          {nameCate}
        </div>
      );
    } else if (nameCate === "BUTCHER") {
      return (
        <div className="bg-yellow-800 p-2 rounded-lg font-medium text-white">
          {nameCate}
        </div>
      );
    } else {
      return (
        <div className="bg-red-400 p-2 rounded-lg font-medium">{nameCate}</div>
      );
    }
  };

  const testPercent = (percent) => {
    if (percent === 0) {
      return null;
    } else {
      return (
        <div className="pl-30  text-center bg-red-600 font-bold text-white p-2 rounded-full ">
          {percent}%
        </div>
      );
    }
  };

  return (
    <div>
      <div className="float-right bg-gray-100 p-2 flex rounded-lg absolute top-[60%] right-[15%]">
        <p>Default Sort</p>
        <select
          className="px-2 mx-2"
          onChange={handleSelectChange}
          value={selectedValue}
        >
          <option value="">sort price</option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
        </select>
      </div>
      <div className="flex justify-between flex-wrap mt-10 pl-3 ">
        {data.map((data) => (
          <div
            key={data.id}
            className="w-[30.3333%] px-2 border-2 border-yellow-500 mr-1 rounded-lg mt-3 z-0 relative"
          >
            <img src={data.image} alt="" className="w[100%] h-[300px]" />
            <Link to={`/Shop/${data.id}`} className="font-medium ">
              <p className="text-center p-2 text-xl truncate ">
                {data.productname}
              </p>
            </Link>

            <div className="flex  justify-around p-2 font-medium">
              <p>{data.price} &#36; / kg</p>

              {(() => {
                const priceSale = priceSaleData(data.price, data.sales);
                console.log(priceSale);
                console.log(data.price);
                if (data.price == priceSale) {
                  return null;
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
                {testname(data.categoryname)}
                {testPercent(data.sales)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
