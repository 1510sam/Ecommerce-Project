import React from "react";
import { MdEmail } from "react-icons/md";
import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaListUl } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { FaShoppingBag } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import CartItem from "../../components/CartItem";
import { FaUser } from "react-icons/fa";
import LoginComponent from "../LoginComponent";
const Headers = () => {
  const [sideNav, setSideNav] = useState(false);
  console.log(sideNav);
  return (
    <div className="container-xl px-4 mx-auto  ">
      <div className="bg-color-layout xl:flex sm:hidden  justify-between rounded-3xl text-white   ">
        <div className="flex py-3 px-3 mt-1  ">
          <span className="flex">
            <div>
              {" "}
              <FaLocationDot className="mt-2" />{" "}
            </div>
            <div className="p-1">Ho Chi Minh City Viet Nam</div>
          </span>
          <span className="flex ml-2">
            <div>
              {" "}
              <MdEmail className="mt-2" />{" "}
            </div>
            <div className="p-1">vodangphat@gmail.com</div>
          </span>
        </div>
        <div>
          <ul className="flex p-4">
            <li className="hover:text-yellow-400">Privacy Polic </li>
            <li className="px-2 hover:text-yellow-400">Terms of Use </li>
            <li className="px-1 hover:text-yellow-400">Sales and Refunds</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between max-h-[150px] ">
        <div className="text-lg py-4 ">
          <Link to="/" className="text-4xl font-bold text-color-layout">
            Fruitables
          </Link>
        </div>

        <div>
          <ul className="lg:flex py-6 text-lg mt-1 sm:hidden">
            <li>
              <Link
                to="/"
                className="px-3 text-color-layout-1 hover:text-yellow-500"
              >
                {" "}
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/Shop"
                className="px-3 text-color-layout-1 flex hover:text-yellow-500"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Shop <MdOutlineArrowDropDown className="mt-1" />
              </Link>
            </li>
            <li>
              <Link
                to="/News"
                className="px-3 text-color-layout-1 hover:text-yellow-500"
              >
                News
              </Link>
            </li>
            <li>
              <Link
                to="/Post"
                className="px-3 text-color-layout-1 hover:text-yellow-500"
              >
                Post
              </Link>
            </li>
          </ul>
        </div>
        <div className="py-4 flex">
          <div className="relative">
            <input
              type="text"
              name=""
              placeholder="Search your vegetable"
              className="border-solid border-2 border-layout rounded-full p-2 px-2"
            />
            <button type="" className="">
              <IoIosSearch className="absolute top-3 right-2 text-xl font-medium" />
            </button>
          </div>

          <div className="flex relative text-color-layout ">
            <CartItem />

            <LoginComponent />

            <FaListUl
              onClick={() => {
                setSideNav(!sideNav);
              }}
              className="sm:block xl:hidden text-2xl mt-3 font-bold hover:text-yellow-500"
            />
          </div>
        </div>
      </div>
      <div>
        {sideNav ? (
          <div className="bg-black/60 fixed w-full h-screen z-10 top-0 left-0"></div>
        ) : (
          ""
        )}
        <div
          className={
            sideNav
              ? "fixed top-0 right-0  w-[300px] h-screen bg-white z-10 duration-200 flex p-2"
              : "fixed top-[-100%] right-0  w-[300px] h-screen bg-white z-10 duration-200"
          }
        >
          <IoMdClose
            size={30}
            onClick={() => {
              setSideNav(!sideNav);
            }}
          />
          <Link to="/" className="text-2xl px-2 font-bold text-color-layout">
            Fruitables
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Headers;
