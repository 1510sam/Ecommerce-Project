import React from "react";
import banner from "../assets/image/banner-2.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { BiLogoGmail } from "react-icons/bi";
import Swal from "sweetalert2";
import axios from "axios";
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!formData.email.trim()) {
      validationErrors.email = "Email required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Email is not valid";
    }
    if (!formData.password.trim()) {
      validationErrors.password = "Password required";
    }
    setError(validationErrors);

    console.log(formData.email, formData.password);
    try {
      const response = await axios.post(
        "http://localhost:5001/v1/api/login",
        formData
      );
      console.log(response.data);

      if (
        response.data.status === "ok" &&
        Object.keys(validationErrors).length === 0
      ) {
        Swal.fire({
          title: "Success !",
          text: "You Have Login Succefully",
          icon: "success",
        });
        const token = response.data.data;
        window.localStorage.setItem("token", token);
        window.localStorage.setItem("success", true);
        setTimeout(function () {
          window.location.href = "./UserDetail";
        }, 2000);
      } else {
        Swal.fire({
          title: "Failed !",
          text: "You Have Login Failed",
          icon: "error",
          confirmButtonText: "Cancel",
        });
      }
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <div>
      <div className="container-lg">
        <div className="relative">
          <img src={banner} alt="" />
          <div className="absolute top-[40%] left-[10%]">
            <p className="font-bold text-color-layout text-7xl">
              Login With Us
            </p>
          </div>
          <div className="absolute top-[30%] left-[60%] w-[400px]  bg-white rounded-lg shadow-lg">
            <form method="" className="px-3 pt-5" onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  className="w-[100%] h-[50px] border-2 border-yellow-500 rounded-lg p-2"
                  name=""
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                {error.email && (
                  <span className="text-red-700">{error.email}</span>
                )}
              </div>
              <div>
                <input
                  type="Password"
                  className="w-[100%] h-[50px] pt-2 border-2 border-yellow-500 rounded-lg p-2 mt-4"
                  placeholder="Password "
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
                {error.password && (
                  <span className="text-red-700">{error.password}</span>
                )}
              </div>
              <div className="text-center bg-color-layout w-[100%] h-[50px] mt-4 rounded-lg font-medium hover:bg-yellow-500 hover:text-white">
                <input
                  type="submit"
                  name=""
                  value="Login"
                  className="pt-2.5 text-xl"
                />
              </div>
            </form>

            <p className="text-center p-2 text-sm">
              You Have A Account ?{" "}
              <Link className="text-color-layout" to={"/Register"}>
                Register Now
              </Link>
            </p>

            <div className="flex items-center pl-[44%] ">
              <div className="w-[20px] h-[1px] bg-gray-400"></div>
              <div className="text-gray-400 px-1">or</div>
              <div className="w-[20px] h-[1px] bg-gray-400"></div>
            </div>

            <div className="flex  w-[80%] h-[50px] border-2 border-black p-3 ml-10 mx-10 my-5">
              <div className="flex items-center ml-50 translate-x-28">
                <BiLogoGmail />{" "}
                <button type="" className="ml-50">
                  Gmail
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
