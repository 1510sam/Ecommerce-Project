import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footers = () => {
  return (
    <div className="bg-color-layout-1 max-w-[100%] mt-10 ">
  
      <div className="flex justify-between container-lg p-5 ">
        <div>
          <p className="text-4xl text-color-layout font-medium">Fruitables</p>
          <p className="text-xl text-yellow-500">Fresh products</p>
        </div>
        <div className="w-[100%] px-40 relative">
          <input type="" name=""  className="w-[100%] h-[50px] px-4 rounded-full" placeholder="Your Email" />
          <button type="submit" className="absolute h-[50px] text-white bg-color-layout rounded-full px-3 right-40">Subcribe Now</button>
        </div>
        <div className="flex"> 
          <button type="" className=" px-3 py-2 border-2 border-yellow-500 mx-2 text-2xl text-yellow-500 rounded-full">
            <FaTwitter />
          </button>
          <button type="" className="px-3 py-2 border-2 border-yellow-500 mx-2 text-2xl text-yellow-500 rounded-full">
            <FaFacebookF />
          </button>
          <button type="" className="px-3 py-2 border-2 border-yellow-500 mx-2 text-2xl text-yellow-500 rounded-full" >
            <FaYoutube />
          </button>
          <button type="" className="px-3 py-2 border-2 border-yellow-500 mx-2 text-2xl text-yellow-500 rounded-full">
            <FaInstagram />
          </button>
        </div>
      </div>
      <div className="container-lg h-[1px] my-10 bg-yellow-500 "> </div>
      <div className="container-lg flex justify-between">
         <div className="">
             <p className="text-2xl text-white font-medium">Why People Like Us !</p>
            <p className="py-2 text-gray-400">Easy to use, stylish placeholders. </p>
            <button type="submit" className="px-3 py-2 border-2 border-yellow-500 rounded-full text-color-layout font-bold mt-2 hover:-translate-y-1 hover:scale-110 hover:bg-yellow-500 hover:text-white">Read More</button>
         </div>
         <div className="">
            <p className="text-white font-medium text-2xl">Shop Info</p>
            <ul className="pt-3 text-gray-400">
               <li><Link to="#">About US</Link></li>
               <li><Link to="#" className="py-3">Contact US</Link></li>
               <li><Link to="#"  className="py-2">Priacy Policy</Link></li>
               <li><Link to="#"  className="py-2">Terms & Condition</Link></li>
               <li><Link to="#"  className="py-2">Return Policy</Link></li>
               <li><Link to="#">FAQs & Help</Link></li>
            </ul>
         </div>
         <div className="">
            <p className="text-white font-medium text-2xl">Account</p>
            <ul className="pt-3 text-gray-400">
               <li><Link to="#">My Account</Link></li>
               <li><Link to="#">Shop Details</Link></li>
               <li><Link to="#">Shopping Cart</Link></li>
               <li><Link to="#">Wishlist</Link></li>
               <li><Link to="#">Orther History</Link></li>
               <li><Link to="#">International Orders</Link></li>
            </ul>
         </div>
         <div className="">
            <p className="text-white font-medium text-2xl">Contact</p>
            <ul className="pt-3 text-gray-400">
               <li>Addreess : Ho Chi Minh city</li>
               <li>Email : vodangphat2002@gmail.com</li>
               <li>phone : 0708223608</li>
               <li>Payment Accepted</li>
               <li className="flex"><FaCcVisa className="text-2xl "/> <FaCcPaypal className="text-2xl mx-2"/> </li>
               
            </ul>
         </div>
      </div>

      <div className="container-xl">
          <p className="p-3 text-yellow-500">@Write By Group 3 </p>
      </div>
    </div>
  );
};

export default Footers;
