import React, { useState, useEffect, useRef } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { BsCreditCard2BackFill } from "react-icons/bs";
import { FaCcPaypal } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import qrImage from "../assets/image/qrpay.jpg";
import axios from "axios";
import Swal from "sweetalert2";
const Checkout = () => {
  const [data, setData] = useState([]);
  const [target, setTarget] = useState("");
  const [dataTotal, setDataTotal] = useState(0);
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
  const calculateTotal = (items) => {
    let totalPrice = 0;
    items.forEach((item) => {
      totalPrice += item.total;
    });
    return totalPrice.toFixed(2);
  };

  const countNameProducts = (item) => {
    let listProduct = [];
    item.forEach((items) => {
      listProduct.push(items.nameProduct + "(" + items.quantity + ")");
    });
    return listProduct;
  };
  console.log(countNameProducts(data));

  useEffect(() => {
    setDataTotal(calculateTotal(data));
  }, [data]);

  useEffect(() => {
    const newTotal = calculateTotal(data);
    setFormData((prevFormData) => ({
      ...prevFormData,
      Total: newTotal,
    }));
  }, [data, target]);

  useEffect(() => {
    const newListProductName = countNameProducts(data);
    setFormData((prevFormData) => ({
      ...prevFormData,
      ListProductName: newListProductName,
    }));
  }, [data]);

  const [formData, setFormData] = useState({
    NameUser: "",
    Email: "",
    ListProductName: [],
    Country: "",
    Total: 0,
    PaymentMethod: target,
    PostalCode: "",
    CreditCardNumber: "",
    AccountNumber: "",
    CardHolder: "",
    Address: "",
    PhoneNumber: "",
    TokenUser: token,
  });

  const handleSubmit = async (event) => {
    try {
      const response = await fetch("http://localhost:5001/OrderDetails/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response) {
        const data = await response.json();
        console.log(data);
        Swal.fire({
          title: "SUCCESS",
          text: "Purchase successfully plese check your Delivery!",
          icon: "success",
          confirmButtonText: "Oke",
        });
      } else {
        return Swal.fire({
          icon: "error",
          title: "Purchase Failed ",
          showConfirmButton: false,
          timer: 3500,
        });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const total = window.localStorage.getItem("datatotal");
  console.log(total);
  const changelayout = (value) => {
    if (value === "Credit Card") {
      return (
        <div>
          <div class="mb-6">
            <label for="email" class=" mb-2 text-sm font-medium ">
              Credit Card Number
            </label>
            <input
              type="text"
              id="email"
              name=""
              value={formData.CreditCardNumber}
              onChange={(e) =>
                setFormData({ ...formData, CreditCardNumber: e.target.value })
              }
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5    dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="0000-0000-0000-0000"
            />
          </div>

          <div class="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                for="first_name"
                class=" mb-2 text-sm font-medium text-gray-900 "
              >
                Account Number
              </label>
              <input
                type="text"
                id="first_name"
                name="account_number"
                value={formData.AccountNumber}
                onChange={(e) =>
                  setFormData({ ...formData, AccountNumber: e.target.value })
                }
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5    dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=" 0000000000"
                required
              />
            </div>
            <div>
              <label
                for="Email"
                class=" mb-2 text-sm font-medium text-gray-900 "
              >
                Card holder
              </label>
              <input
                type="text"
                id="last_name"
                name="Cardholder"
                value={formData.CardHolder}
                onChange={(e) =>
                  setFormData({ ...formData, AccountNumber: e.target.value })
                }
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5    dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Card holder"
                required
              />
            </div>
            <div>
              <p className="p-4 text-xl font-bold">
                You pay via our Qr code and we will confirm after successful
                payment via your email
              </p>
              <img src={qrImage} alt="" />
            </div>
          </div>
        </div>
      );
    } else if (value === "Payment on delivery") {
      return (
        <div>
          <div class="mb-6">
            <label for="email" class=" mb-2 text-sm font-medium ">
              Address
            </label>
            <input
              type="text"
              id=""
              name="address"
              value={formData.Address}
              onChange={(e) =>
                setFormData({ ...formData, Address: e.target.value })
              }
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5    dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="ST."
              required
            />
          </div>

          <div class="mb-6">
            <label for="email" class=" mb-2 text-sm font-medium ">
              Phone Number
            </label>
            <input
              type="text"
              id=""
              value={formData.PhoneNumber}
              onChange={(e) =>
                setFormData({ ...formData, PhoneNumber: e.target.value })
              }
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5    dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="(+84) 0708223608"
              required
            />
          </div>
        </div>
      );
    } else if (value === "Paypal") {
      return (
        <div>
          <PayPalScriptProvider
            options={{
              "client-id":
                "Ab-rwNYEtD25ImhQrI_mVUiu8pseaV--OUqUuLl4pYJNUOT3p-PtYG_XRmPwsFwumOg9dkKwZkngQ4oq",
            }}
          >
            <PayPalButtons
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      amount: {
                        value: "20.00",
                      },
                    },
                  ],
                });
              }}
            />
          </PayPalScriptProvider>
        </div>
      );
    } else {
      <h1>Comming soon</h1>;
    }
  };

  return (
    <div className="container-lg">
      <h1 className="font-bold text-2xl"> YOU'VE COME A LONG WAY</h1>

      <div className="flex">
        <div className="w-[70%]">
          <h3 className="my-3 text-xl font-medium ">
            {" "}
            1 . Persional Infomation
          </h3>
          <form
            onSubmit={() => {
              handleSubmit();
            }}
          >
            <div class="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label
                  for="first_name"
                  class=" mb-2 text-sm font-medium text-gray-900 "
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="first_name"
                  name="NameUser"
                  value={formData.NameUser}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5    dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="John"
                  onChange={(e) =>
                    setFormData({ ...formData, NameUser: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <label
                  for="Email"
                  class=" mb-2 text-sm font-medium text-gray-900 "
                >
                  Email
                </label>
                <input
                  type="text"
                  id="last_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5    dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Doe"
                  name="Email"
                  value={formData.Email}
                  onChange={(e) =>
                    setFormData({ ...formData, Email: e.target.value })
                  }
                />
              </div>
            </div>

            <div class="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label
                  for="first_name"
                  class=" mb-2 text-sm font-medium text-gray-900 "
                >
                  Country
                </label>
                <input
                  type="text"
                  value={formData.Country}
                  onChange={(e) =>
                    setFormData({ ...formData, Country: e.target.value })
                  }
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5    dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Ex. VietNam"
                  required
                />
              </div>
              <div>
                <label
                  for="Email"
                  class=" mb-2 text-sm font-medium text-gray-900 "
                >
                  PostalCode
                </label>
                <input
                  type="text"
                  id=""
                  name="PostalCode"
                  value={formData.PostalCode}
                  onChange={(e) =>
                    setFormData({ ...formData, PostalCode: e.target.value })
                  }
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5    dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="PostalCode"
                  required
                />
              </div>
            </div>

            <h3 className="my-3 text-xl font-medium "> 2 . Payment method</h3>
            <div className="flex">
              <div className="flex text-xl p-2">
                <div>
                  <input
                    type="radio"
                    name="1"
                    value="Credit Card"
                    onChange={(e) => {
                      setTarget(e.target.value);
                    }}
                  />{" "}
                  Credit Card
                </div>
                <div className="p-1">
                  <BsCreditCard2BackFill />
                </div>
              </div>
              <div className="flex text-xl p-2">
                <div>
                  <input
                    type="radio"
                    name="1"
                    value="Paypal"
                    onChange={(e) => {
                      setTarget(e.target.value);
                    }}
                  />{" "}
                  Paypal
                </div>
                <div className="p-1">
                  <FaCcPaypal />
                </div>
              </div>

              <div className="flex text-xl p-2">
                <div>
                  <input
                    type="radio"
                    name="1"
                    value="Payment on delivery"
                    onChange={(e) => {
                      setTarget(e.target.value);
                    }}
                  />{" "}
                  Payment on delivery
                </div>
                <div className="p-1">
                  <MdLocalShipping />
                </div>
              </div>
            </div>

            {changelayout(target)}

            <input
              type="submit"
              value="Payment on delivery"
              class="text-white bg-green-700 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            />
          </form>
        </div>
        <div className="w-[30%] mt-16">
          <div className="px-5 border-2 border-black-500 rounded-lg ml-5">
            <p className="py-3 font-bold">Your Order</p>
            {data.map((data, index) => (
              <div className="flex justify-between">
                <div>
                  <p>
                    {data.nameProduct}({data.quantity}):
                  </p>
                </div>
                <div>
                  <p>{data.total}$</p>
                </div>
              </div>
            ))}

            <div className="flex justify-between border-t-2 border-black-500 py-2">
              <div>
                <p>Total:</p>
              </div>
              <div>
                <p>{calculateTotal(data)}$</p>
                <p>{window.localStorage.setItem("datatotal", dataTotal)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
