import React from "react";
// core version + navigation, pagination modules:
import SlideShow from "../components/SlideShow";

import { LiaShippingFastSolid } from "react-icons/lia";
import { MdSecurityUpdateGood } from "react-icons/md";
import feature1 from "../assets/image/featur-1.jpg";
import feature2 from "../assets/image/featur-2.jpg";
import feature3 from "../assets/image/featur-3.jpg";
import panner1 from "../assets/image/baner-1.png"
import ListProductSale from "../components/ListProductSale";
const Home = () => {


  return (
    <div className="relative">
      {/* slide show start */}
      <div className="image-conten relative">
        <div className="absolute top-0  h-[100%] w-[100%] bg-white opacity-80	"></div>
        <div className=" container-lg flex justify-between absolute top-0  translate-y-20">
          <div className="xl:px-24 xl:py-1 max-w-[70%] relative lg:mt-20">
            <p className="lg:text-2xl sm:text-wrap text-yellow-500 font-mono ">
              100% Organic Foods
            </p>
            <h1 className="lg:text-7xl sm:text-3xl font-bold text-color-layout">
              Organic Veggies & Fruits Foods
            </h1>
            <input
              type="text"
              name=""
              placeholder="Search"
              className="lg:w-[67%]  lg:p-3 sm:p-2 rounded-full text-xl lg:mt-10  border-2 border-yellow-500"
            />
            <div className="bg-color-layout absolute lg:top-56  sm:top-16 -mt-1  lg:left-2/4 sm:left-36 lg:px-3 lg:py-3 sm:px-2 sm:py-2 rounded-full border-2 border-yellow-500 transition ease-in-out delay-150 bg-yellow-500 hover:-translate-y-1 hover:scale-110 hover:bg-yellow-500 ">
              <button type="">Submit Now</button>
            </div>
          </div>

          <SlideShow />
        </div>
      </div>

      {/* slide show end  */}

      {/*------ Slide support start ---- */}
      <div className="container-lg flex flex-wrap justify-between mt-36 ">
        <div className="lg:w-[256px] lg:h-[250px] bg-color-layout text-center p-3 rounded-md mx-2">
          <LiaShippingFastSolid className="ml-16 text-8xl py-2 text-yellow-300" />
          <p className="lg:p-2 text-2xl font-medium text-white">
            Free Shipping
          </p>
          <p className="p-2 text-white text-xl"> Free on orther over $300</p>
        </div>
        <div className="lg:w-[256px] lg:h-[250px] bg-color-layout text-center p-3 rounded-md mx-2">
          <MdSecurityUpdateGood className="ml-16 text-8xl py-2 text-yellow-300" />
          <p className="lg:p-2 text-2xl font-medium text-white">
            Security Payment
          </p>
          <p className="p-2 text-white text-xl"> 100% Security Payment</p>
        </div>
        <div className="lg:w-[256px] lg:h-[250px] bg-color-layout text-center p-3 rounded-md mx-2 lg:mt-0 sm:mt-5">
          <LiaShippingFastSolid className="ml-16 text-8xl py-2 text-yellow-300" />
          <p className="lg:p-2 text-2xl font-medium text-white">
            30 Day Return
          </p>
          <p className="p-2 text-white text-xl"> 30 day money guarantee </p>
        </div>
        <div className="lg:w-[256px] lg:h-[250px] bg-color-layout text-center p-3 rounded-md mx-2 lg:mt-0 sm:mt-5">
          <LiaShippingFastSolid className="ml-16 text-8xl py-2 text-yellow-300" />
          <p className="lg:p-2 text-2xl font-medium text-white">24/7 Support</p>
          <p className="p-2 text-white text-xl"> Support every time fast</p>
        </div>
      </div>
      {/*----- slide Support end -----  */}

      <div className="container-lg">
        <p className="py-6 text-4xl font-medium">Sale off %</p>
      </div>

      {/*----- show product start ----- */}
      {/* <div className="flex flex-wrap justify-between  container-lg">
        {vegetablesProducts.map((product) => (
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
            <p className="text-center ">{product.desc}</p>
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
      </div> */}
      <ListProductSale/>
      {/*---- show product end ---- */}

      {/* Notification start */}

      <div className="container-lg flex justify-between mt-40">
        <div className="max-w-[30%] border-2 border-yellow-500 rounded-xl relative">
          <img src={feature1} alt="" className="rounded-lg" />
          <div className="bg-yellow-400 max-w-[100%] h-[150px] rounded-b-lg"></div>
          <div className="text-center bg-green-500 max-w-[60%] absolute top-2/4 left-28 px-4 py-8 rounded-xl">
            <p className="text-white font-medium text-2xl">Fresh Apples</p>
            <p className="text-2xl text-bold mt-3">20% OFF</p>
          </div>
        </div>
        <div className="max-w-[30%] border-2 border-gray-500 rounded-xl relative">
          <img src={feature2} alt="" className="rounded-xl" />
          <div className="bg-gray-700 max-w-[100%] h-[150px] rounded-b-lg"></div>
          <div className="text-center  bg-white max-w-[60%] absolute top-2/4 left-28 px-4 py-8 rounded-xl">
            <p className="text-green-500 font-medium text-2xl ">Tasty Fruits</p>
            <p className="text-2xl text-bold mt-3">Free delivery</p>
          </div>
        </div>
        <div className="max-w-[30%] border-2 border-green-500 rounded-xl relative">
          <img src={feature3} alt="" className="rounded-xl" />
          <div className="bg-green-500 max-w-[100%] h-[150px] rounded-b-lg"></div>
          <div className="text-center bg-yellow-500 max-w-[60%] absolute top-2/4 left-24 px-4 py-8 rounded-xl">
            <p className="text-white font-medium text-2xl">Exotic Vegitable</p>
            <p className="text-2xl text-bold mt-3">Discount 30$</p>
          </div>
        </div>
      </div>

      {/* Notification end */}


      {/* ---------------banner------------------- */}

        <div className="max-w-[100%]  mt-20 bg-yellow-500">
           <div className="container-lg flex justify-between">
              <div className="max-w-[50%] lg:translate-y-1/3 sm:p-3 ">
                  <p className="lg:text-6xl sm:text-4xl  text-white font-bold">Fresh Exotic Fruits</p>
                  <p className="mt-3 text-black lg:text-4xl sm:text-2xl font-medium">in Our Store</p>
                  <article  className="">The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.</article>
                  <button type="submit" className="text-center mt-5  px-10 py-3 rounded-full  border-2 border-white hover:bg-green-400 ransition delay-200 duration-300 ease-in-out">BUY</button>
              </div>
              <div className="max-w-[50%]">
                 <img src={panner1} alt="" className="lg:max-w-[100%] p-3 lg:translate-x-0 lg:translate-y-0 sm:translate-y-6" />
              </div>
           </div>
        </div>



      {/* ---------------banner------------------- */}
    </div>
  );
};

export default Home;
