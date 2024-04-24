import React from "react";
import { useEffect, useState } from "react";
import image from "../assets/image/1.jfif";
import { GiInfo } from "react-icons/gi";
import { CiLogout } from "react-icons/ci";
import { IoSettings } from "react-icons/io5";
import { MdNoteAdd } from "react-icons/md";
import Swal from "sweetalert2";
import { FaUser } from "react-icons/fa";
import { FaPhoneFlip } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { Link } from "react-router-dom";
import axios from "axios";

const UserDetail = () => {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5001/v1/api/userData", {
          method: "POST",
          crossDomain: true,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            token: window.localStorage.getItem("token"),
          }),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setUserData(data);
        window.localStorage.setItem("userId", data.data._id);
        window.localStorage.setItem("name", data.data.name);
        console.log(data, "userData");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const UserID = localStorage.getItem("userId");
  console.log(UserID);
  const [orderDetails, setOrderDetails] = useState({});

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const response = await axios.post(
          "http://localhost:5001/api/orderdetail",
          { userId: UserID },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setOrderDetails(response.data);
        console.log("Lịch sử mua hàng là : ");
      } catch (error) {
        console.error("Lỗi khi lấy lịch sử mua hàng:", error);
      }
    };
    fetchOrderDetails();
  }, [UserID]);

  console.log(orderDetails.data);
  const dataOrder = orderDetails.data;

  //delete order
  const [idOrder, setIdOrder] = useState("");

  console.log(idOrder);

  const deleteOrder = async (id) => {
    try {
      const response = await axios.post(
        `http://localhost:5001/api/deleteOrder/${id}`
      );
      if (response) {
        Swal.fire({
          icon: "success",
          title: "Detete Order Successfully",
          showConfirmButton: false,
        });
        setTimeout(function () {
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
      Swal.fire({
        icon: "error",
        title: "Something went wrong",
        showConfirmButton: false,
        timer: 3000,
      });
    }
  };

  const handleClick = () => {
    localStorage.clear();
    window.location.href = "./Login";
  };

  const checkStatus = (status) => {
    if (status === "Pending") {
      return (
        <p className="bg-red-500 h-[30px] w-[50px] text-lg rounded-lg mt-3">
          Pending
        </p>
      );
    } else {
      return (
        <p className="bg-green-500 h-[30px]  w-[50px] text-lg rounded-lg mt-3">
          Active
        </p>
      );
    }
  };

  return (
    <div className="container-lg">
      <div className="bg-white overflow-hidden shadow rounded-lg border">
        <div className="flex ">
          <div className="w-[30%] border-r-4 border-indigo-500 items-center">
            <div className="mx-20">
              <img className="p-3 w-[70%] rounded-full" src={image} alt="" />
              <form>
                <input type="file" name="" value="" className="w-[50%] p-3" />
              </form>
              <p className="px-10 font-bold text-xl">{}</p>
              <ul className="px-10 py-3 w-[300px]">
                <li className="mt-2 text-xl">
                  <div className="flex">
                    <div className="p-2">
                      <GiInfo />
                    </div>
                    <div>User Info</div>
                  </div>
                </li>
                <li className="mt-2 text-xl">
                  <div className="flex">
                    <div className="p-2">
                      <IoSettings />
                    </div>
                    <div>Setting</div>
                  </div>
                </li>
                <li className="mt-2 text-xl">
                  <div className="flex">
                    <div className="p-2">
                      <MdNoteAdd />
                    </div>
                    <Link to={"/UserPost"}>Post an article</Link>
                  </div>
                </li>
                <li className="flex mt-2 text-xl">
                  <button onClick={handleClick} className="flex">
                    <div className="p-2">
                      <CiLogout className="" />
                    </div>
                    <div>Logout</div>
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-[70%]">
            <h1 className="p-4 text-3xl font-medium">Profile</h1>
            <div className="flex p-3 text-xl">
              <div className="flex w-[200px]">
                <div className="p-1">
                  <FaUser />
                </div>
                <p>User ID :</p>
              </div>

              <div className="ml-40">{userData.data && userData.data._id}</div>
            </div>
            <div className="flex p-3 text-xl">
              <div className="flex w-[200px]">
                <div className="p-1">
                  <FaUser />
                </div>
                <p>Name :</p>
              </div>

              <div className="ml-40">{userData.data && userData.data.name}</div>
            </div>
            <div className="flex p-3 text-xl">
              <div className="flex w-[200px]">
                <div className="p-1">
                  <FaPhoneFlip />
                </div>
                <p>Phone Number :</p>
              </div>

              <div className="ml-40">
                {userData.data && userData.data.phoneNumber}
              </div>
            </div>

            <div className="flex p-3 text-xl">
              <div className="flex w-[200px]">
                <div className="p-1">
                  <TfiEmail />
                </div>
                <p>Email :</p>
              </div>

              <div className="ml-40">
                {userData.data && userData.data.email}
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className="font-bold text-3xl text-center my-4">Order History</h1>
      <div>
       
        {dataOrder &&
          dataOrder.map((data) => {
            return (
              <div>
                <ul className="flex justify-between w-[100%] text-lg my-3 align-content-center p-4   border border-sky-500 rounded-sm shadow-lg">
                  <li className="mt-3 text-center">{data.NameUser}</li>
                  <li className="mt-3 w-[20.28%] text-center">
                    {data.ListProductName}
                  </li>
                  <li className="mt-3 w-[14.28%] text-center">
                    {data.Total} $
                  </li>
                  <li className="mt-3 w-[14.28%] text-center">
                    {data.Country}
                  </li>
                  <li className="mt-3 w-[14.28%] text-center">
                    {data.Address}
                  </li>
                  <li className=" px-14">
                    {checkStatus(data.Status)}
                  </li>
                  <li className="mb-10 w-[14.28%] text-center">
                    {(() => {
                      if (data.Status == "Active") {
                        return (
                          <input
                            type="submit"
                            className="text-xl bg-red-700 w-[50px] h-[50px] text-white  rounded-full"
                            name=""
                            value="X"
                            onClick={() => {
                              alert("You dont delete this order");
                            }}
                          />
                        );
                      } else {
                        return (
                          <input
                            type="submit"
                            className="text-xl bg-red-700 w-[50px] h-[50px] text-white  rounded-full"
                            name=""
                            value="X"
                            onClick={() => deleteOrder(data._id)}
                          />
                        );
                      }
                    })()}
                  </li>
                </ul>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default UserDetail;
