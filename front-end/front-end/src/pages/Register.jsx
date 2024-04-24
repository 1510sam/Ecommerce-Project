import React from "react";
import banner from "../assets/image/banner-2.jpg";
import { Link } from "react-router-dom";
import { BiLogoGmail } from "react-icons/bi";
import { useState } from "react";
import axios from "axios";
const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  const [error, setError] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!formData.name.trim()) {
      validationErrors.name = "Username required";
    }
    if (!formData.phoneNumber.trim()) {
      validationErrors.phoneNumber = "Phone number required";
    }
    if (!formData.email.trim()) {
      validationErrors.email = "Email required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Email is not valid";
    }
    if (!formData.password.trim()) {
      validationErrors.password = "Password required";
    } else if (formData.password.length < 6) {
      validationErrors.password = "Password should be at least 6 characters";
    }
    setError(validationErrors);

    try {
      const response = await axios.post(
        "http://localhost:5001/v1/api/register",
        formData
      );
      console.log(response.data);
      if (response.data.error) {
        alert(response.data.error);
      } else if (Object.keys(validationErrors).length === 0) {
        alert("You have registered successfully");
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
            <p className="font-bold text-color-layout text-7xl w-[50%]">
              Become our member
            </p>
          </div>
          <div className="absolute top-[10%] left-[60%] w-[400px]  bg-white rounded-lg shadow-lg">
            <form className="px-3 pt-5" onSubmit={handleSubmit}>
              <div>
                <input
                  type="Text"
                  className="w-[100%] h-[50px] pt-2 border-2 border-yellow-500 rounded-lg p-2 mt-4"
                  placeholder="Name"
                  name="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
                {error.name && (
                  <span className="text-red-700">{error.name}</span>
                )}
              </div>
              <div>
                <input
                  type="Text"
                  className="w-[100%] h-[50px] pt-2 border-2 border-yellow-500 rounded-lg p-2 mt-4"
                  placeholder="Email"
                  name="email"
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
                  type="text"
                  className="w-[100%] h-[50px] border-2 border-yellow-500 rounded-lg p-2 mt-4"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  value={formData.phoneNumber}
                  onChange={(e) =>
                    setFormData({ ...formData, phoneNumber: e.target.value })
                  }
                />
                {error.phoneNumber && (
                  <span className="text-red-700">{error.phoneNumber}</span>
                )}
              </div>
              <div>
                <input
                  type="Password"
                  className="w-[100%] h-[50px] pt-2 border-2 border-yellow-500 rounded-lg p-2 mt-4"
                  name="pasaword"
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
                  value="Register"
                  className="pt-2.5 text-xl"
                />
              </div>
            </form>

            <p className="text-center p-2 text-sm">
              You Have A Account ?{" "}
              <Link className="text-color-layout" to={"/Login"}>
                Login <i class="fas fa-network-wired "></i>
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

export default Register;
