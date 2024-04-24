import React, { useEffect, useState } from "react";
import axios from "axios";
const ListProductSale = () => {
  const vegetablesProducts = [
    {
      id: "1",
      name: "Grapes",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      price: "50$",
      sales: "-50%",
      priceSale: "25$",
      image:
        "https://jthemes.net/themes/html/organic/assets/images/product/product2.png",
    },
    {
      id: "2",
      name: "Carot",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      price: "10$",
      sales: "-50%",
      priceSale: "5$",
      image:
        "https://jthemes.net/themes/html/organic/assets/images/product/product3.png",
    },
    {
      id: "3",
      name: "Potato",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      price: "10$",
      sales: "-50%",
      priceSale: "5$",
      image:
        "https://jthemes.net/themes/html/organic/assets/images/product/product4.png",
    },
    {
      id: "4",
      name: "Potato",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      price: "10$",
      sales: "-50%",
      priceSale: "5$",
      image:
        "https://jthemes.net/themes/html/organic/assets/images/product/product4.png",
    },
  ];
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5001/api/productsSale/Show`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {/*----- show product start ----- */}
      <div className="flex flex-wrap justify-between  container-lg">
        {data.map((product) => (
          <div
            key={product.id}
            className="border-2 border-yellow-500 lg:max-w-[24%] sm:max-w-[45%] max-h-[400px] rounded-md shadow-current hover:shadow-2xl px-1 py-1 relative sm:mt-10"
          >
            <img
              src={product.image}
              alt=""
              className="lg:px-10 lg:py-10 lg:w-[100%] lg:h-[55%]"
            />
            <p className="text-center text-2xl">{product.name}</p>
         
            <div className="flex justify-around p-2 ">
              <div>
                <p className="text-xl font-medium">{product.price} / kg</p>
              </div>
              <div>
                <button
                  type=""
                  className="border-solid border-2 border-yellow-500 p-2 text-sm rounded-full font-medium text-color-layout hover:bg-yellow-400 hover:animate-bounce"
                >
                  {" "}
                  Add To Cart{" "}
                </button>
              </div>
            </div>
            <div className="absolute top-2 left-1">
              <p className="px-3 py-2 rounded-full bg-yellow-600 text-white">
                Fruits
              </p>
            </div>
          </div>
        ))}
      </div>
      {/*---- show product end ---- */}
    </div>
  );
};

export default ListProductSale;
