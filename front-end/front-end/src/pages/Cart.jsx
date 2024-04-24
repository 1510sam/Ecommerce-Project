import React, { useState, useEffect } from "react";
import image1 from "../assets/image/cart-empty.png";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
const Cart = ({ cart, changeQuantity }) => {
  const [data, setData] = useState(cart);
  const checkUser = () => {
    const user = localStorage.getItem("userId");
    if (user === null) {
      window.location.href = "../Login";
    } else {
      return true;
    }
  };
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

  const handleDelete = async (id) => {
    try {
      const response = await axios.post(
        `http://localhost:5001/api/v1/deleteItem/cart/${id}`
      );
      if (response) {
        Swal.fire({
          icon: "success",
          title: "Detete Cart Successfully",
          showConfirmButton: false,
        });
        setTimeout(function() {
          window.location.reload();
        }, 3000);
      
      } else {
        Swal.fire({
          icon: "error",
          title: "Detete failed",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    } catch (error) {
      alert("delete cart failed" + error);
    }
  };

  const calculateTotal = (data) => {
    let totalPrice = 0;
    data.forEach((item) => {
      totalPrice += item.total;
    });
    return totalPrice.toFixed(2);
  };

  if (checkUser()) {
    if (data.length > 0) {
      return (
        <div className="container w-full">
          <div className="container mx-auto px-4 sm:px-6 py-5">
            <div className="container py-5">
              <div className="overflow-x-auto">
                <table className="w-full table-auto border-collapse text-center">
                  <thead>
                    <tr>
                      <th scope="col">Products</th>
                      <th scope="col">Name</th>
                      <th scope="col">Price</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Total</th>
                      <th scope="col">Handle</th>
                    </tr>
                  </thead>

                  <tbody>
                    {data.map((data, index) => (
                      <tr className="text-center" key={index}>
                        <td className="text-center">
                          <div className="flex align-items-center justify-center">
                            <img
                              src={data.image}
                              className="object-cover w-full h-full me-5 mt-4 rounded-full"
                              style={{ width: "80px", height: "80px" }}
                              alt=""
                            />
                          </div>
                        </td>
                        <td className="text-center">
                          <p className="mb-0 mt-4">{data.nameProduct}</p>
                        </td>
                        <td className="text-center">
                          <p className="mb-0 mt-4">{data.price} $</p>
                        </td>
                        <td className="text-center">
                          <div
                            className=" m-auto text-center"
                            style={{ width: "220px" }}
                          >
                            {data.quantity}
                          </div>
                        </td>
                        <td className="text-center">
                          <p className="mb-0 mt-4">{data.total}$</p>
                        </td>
                        <td className="text-center">
                          <input
                            type="submit"
                            className="text-xl bg-red-700 w-[50px] h-[50px] text-white  rounded-full"
                            name=""
                            value="X"
                            onClick={() => handleDelete(data.id)}
                          />
                        </td>
                      </tr>
                    ))}
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>
                        {" "}
                        <p className="text-2xl font-bold">
                          <p className="font-bold text-xl">
                            Total : {calculateTotal(data)} $
                          </p>
                        </p>
                      </td>
                      <td>
                        <Link
                          to="/Checkout"
                          type=""
                          className="bg-yellow-500 p-3 rounded-full font-medium"
                        >
                          Checkout
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container text-center">
          <img src={image1} alt="" className="ml-80 w-[50%]" />
          <p className="text-4xl font-bold">Cart IsEmty</p>
        </div>
      );
    }
  } else {
    return <div>{alert("Please login to buy products")}</div>;
  }
};

export default Cart;
