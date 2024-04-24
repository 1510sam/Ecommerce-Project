import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { FaPlusCircle } from "react-icons/fa";
import { FaCircleMinus } from "react-icons/fa6";
import imageuser from "../assets/149071.png";
import NavList from "../components/NavList";

import { useParams } from "react-router-dom";
import "./Cart";
import axios from "axios";
const Shopdetail = ({ addToCard }) => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [number, setNumber] = useState(1);

  //get product following ID
  useEffect(() => {
    axios
      .get(`http://localhost:5001/api/products/${id}`)
      .then((res) => {
        console.log(res.data[0].id);
        window.localStorage.setItem("idProduct", res.data[0].id);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const [comment, setComment] = useState({
    Content: "",
    idProduct: id,
    nameUser: window.localStorage.getItem("name"),
  });

  //Posting the comment
  const handleSubmit = async (e) => {
    e.preventDefault();
    const Testname = localStorage.getItem("name");
    if (Testname != null) {
      try {
        const response = await axios.post(
          "http://localhost:5001/api/post/comment",
          comment,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        Swal.fire({
          icon: "success",
          title: "Comment Successfully",
          showConfirmButton: false,
        });
        setTimeout(function() {
          window.location.reload();
        }, 1000);
      } catch (error) {
        console.error("Error posting comment:", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          confirmButtonText: "Cancel...",
        });
      }
    } else {
      Swal.fire({
        title: "warning!",
        text: "You have Login to comment ",
        icon: "warning",
        confirmButtonText: "Oke",
      });
      // window.location.href = "../Login";
    }
  };

  const [commentData, setCommentData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5001/api/comment?idProduct=${id}`)
      .then((res) => {
        setCommentData(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  console.log(commentData);

  const priceSaleData = (price, sale) => {
    let result = price * (1 - sale / 100);
    if (sale > 0) {
      return <div>{result.toFixed(2)}&#36;/kg</div>;
    } else return <div></div>;
  };

  const salePrice = (price, sale) => {
    const result = price * (1 - sale / 100);
    return result.toFixed(2);
  };
  const checkUser = () => {
    const user = localStorage.getItem("userId");
    if (user === null) {
      Swal.fire({
        title: "Warning !",
        text: "You Have to Login To Buy Products",
        icon: "warning",
        confirmButtonText: "Oke",
      });
     
    } else {
      return true;
    }
  };
  const token = localStorage.getItem("userId");
  console.log(token);
  const getData = (data) => {
    const productData = {
      id_product: data.id,
      nameProduct: data.name,
      image: data.image,
      price: salePrice(data.price, data.sales),
      quantity: number,
      token: token,
    };
    if (checkUser()) {
      fetch(" http://localhost:5001/api/v1/addToCart/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      }).then((response) => {
        if (!response.ok) {
          return Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
        }
        return Swal.fire({
          title: "SUCCESS",
          text: "Product add success!",
          icon: "success",
          confirmButtonText: "Oke",
        });
      });
    } else {
      return Swal.fire({
        title: "Warning !",
        text: "You Have Login To Buy Products",
        icon: "warning",
        confirmButtonText: "Oke",
      });
    }
  };

  return (
    <div>
      <div className="image-banner relative">
        <p className="text-4xl text-white font-bold  absolute top-2 left-2/4 translate-y-16">
          Shop
        </p>
        <p className="text-xl text-color-layout absolute top-28 left-[49%] py-2">
          <Link to="/home">Home</Link> / <Link to="/shop">Shop</Link>
        </p>
      </div>

      <div className="container-lg flex mt-5">
        {data.map((data) => (
          <div className="w-[70%] pr-4">
            <div className="flex ">
              <div className="w-[60%] rounded-lg shadow-lg">
                <img src={data.image} alt="" className="w-[100%] h-[500px]" />
              </div>
              <div className="w-[40%] px-4">
                <p className=" text-2xl font-bold ">{data.name}</p>

                <p className="mt-2">
                 
                </p>
                <p className="text-2xl font-bold mt-3">
                   <span className="px-2">
                    {priceSaleData(data.price, data.sales)}
                   </span>
                   <p className="text-decoration-line-through text-red-600 px-2 text-lg">
                  {data.price}&#36;/kg{" "}
                   </p>
                 
                </p>

                <div className="mt-5 text-2xl">
                  <button
                    type="button"
                    onClick={() => setNumber(number + 1)}
                    className=""
                  >
                    <FaPlusCircle />
                  </button>
                  <input
                    type=""
                    name=""
                    value={number}
                    className="w-[50px] text-center px-1 py-2"
                    
                    onChange={(e) => setNumber(parseInt(e.target.value))}
                  />
                  <button type="button" onClick={() => setNumber(number - 1)}>
                    <FaCircleMinus />
                  </button>
                </div>

                <input
                  onClick={() => getData(data)}
                  type="submit"
                  value="add to cart"
                  className="mt-10 border-2 border-yellow-500 px-4 py-2 flex text-color-layout font-bold rounded-full hover:bg-yellow-500 hover:text-white"
                ></input>
              </div>
            </div>

            <p className="mt-7 px-2 text-2xl font-medium">Description</p>

            <div className="w-[100%] h-[2px] bg-gray-300 my-4"></div>
            <p>{data.desc}</p>

            <p className="mt-7 px-2 text-2xl font-medium">Review</p>
            <div className="w-[100%] h-[2px] bg-gray-300 my-4"></div>

            {commentData.map((data) => (
              <div className="flex my-5">
                <div>
                  <img
                    src={imageuser}
                    alt=""
                    className="w-[100px] h-[100px] translate-y-1/3 px-2"
                  />
                </div>
                <div className="mx-3">
                  <p>April 12 , 2024 </p>
                  <p className="font-bold text-xl">{data.nameUser}</p>
                  <p className="mt-2">{data.content}</p>
                </div>
              </div>
            ))}

            <p className="mt-7 px-2 text-2xl font-medium py-10">
              Leave a Reply
            </p>

            <form onSubmit={handleSubmit}>
              <input
                type="hidden"
                value={data.id}
                onChange={(e) => {
                  setComment({ ...comment, idProduct: e.target.value });
                }}
              />
              <div className="mt-4 text-xl flex "></div>

              <div className="mt-5">
                <textarea
                  rows="5"
                  cols=""
                  placeholder="Your Reivew"
                  value={comment.Content}
                  className="w-[100%] text-xl border-b-2 border-gray-300"
                  onChange={(e) => {
                    setComment({ ...comment, Content: e.target.value });
                  }}
                ></textarea>
              </div>

              <input
                type="submit"
                value="Post"
                className="float-right my-4 text-xl mt-10 border-2 border-yellow-500 px-4 py-2 flex text-color-layout font-bold rounded-full hover:bg-yellow-500 hover:text-white "
              />
            </form>
          </div>
        ))}

        <div className="w-[30%]">
          <NavList />
        </div>
      </div>
    </div>
  );
};

export default Shopdetail;
