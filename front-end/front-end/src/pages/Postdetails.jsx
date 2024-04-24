import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import NavList from "../components/NavList";
import {
    FaThumbsUp,
    FaThumbsDown,
    FaFacebook,
    FaTwitter,
    FaYoutube,
  } from "react-icons/fa";
  
  const title = {
    color: "#000",
    fontSize: "24px",
    fontWeight: 600,
    lineHeight: 1.4,
  };
  
  const details = {
    fontSize: "18px",
  };
  
  const feedBack = {
    display: "flex",
    alignItems: "center",
  };
  
  const feedBackHeading = {
    fontWeight: 500,
    fontSize: "1.125rem",
    lineHeight: "1.5rem",
    textUnderlineOffset: ".3125rem",
  };
  
  const feedBackBtn = {
    width: "2.5rem",
    height: "2.5rem",
    borderRadius: "50%",
    borderColor: "#333",
    borderWidth: "1px",
  };
const PostDetails = () => {
    
    const { id } = useParams();
    const [data, setData] = useState([]);
    useEffect(() => {
      axios
        .get(`http://localhost:5001/api/showPost/${id}`)
        .then((res) => {
          console.log(res);
          setData(res.data);
        })
        .catch((err) => console.log(err));
    }, [id]);

    console.log(data);
    console.log(data.data && data.data.desc)

  return (
    <div className="container-lg flex">
      <div className=" w-[70%] flex ">
        <div className="w-full  p-4">
          <div className="mb-90">
            <div className="about-img">
              <img
                style={{ width: "100%" }}
                src={data.data && data.data.image}
                alt=""
              />
            </div>

            <div style={title} className="title mb-8 pt-8">
              <h3 className="mb-2">
                {data.data && data.data.title}
              </h3>
              <span
                className="flex flex-row items-start justify-between"
                style={{ fontSize: "16px" }}
              >
                <p>
                  By <strong>{data.result && data.result.username}</strong> | Published on February 1,
                  2024
                </p>
                <div className="flex min-w-5">
                  <ul className="ml-auto flex flex-wrap justify-center relative z-10 mr-2">
                    <li>
                      <button style={feedBackBtn} className="ml-4 relative">
                        <FaFacebook
                          size={25}
                          className="absolute top-[6px] left-[7px] text-blue-500"
                        />
                      </button>
                    </li>
                    <li>
                      <button style={feedBackBtn} className="ml-4 relative">
                        <FaTwitter
                          size={25}
                          className="absolute top-[7px] left-[7px] text-blue-500"
                        />
                      </button>
                    </li>
                    <li>
                      <button style={feedBackBtn} className="ml-4 relative">
                        <FaYoutube
                          size={25}
                          className="absolute top-[7px] left-[7px] text-red-500"
                        />
                      </button>
                    </li>
                  </ul>
                </div>
              </span>
            </div>

            <div style={details}>
              <p style={details} className="mb-6">
                Moms are like…buttons? Moms are like glue. Moms are like pizza
                crusts. Moms are the ones who make sure things happen—from birth
                to school lunch.
              </p>
              <p style={details} className="mb-6">
                Moms are like…buttons? Moms are like glue. Moms are like pizza
                crusts. Moms are the ones who make sure things happen—from birth
                to school lunch.
              </p>
              <p style={details} className="mb-6">
                {data.data && data.data.desc}
              </p>
            </div>
            <hr className="mb-8" />
            <div style={feedBack}>
              <div style={feedBackHeading}>Was this page helpful?</div>
              <button style={feedBackBtn} className="ml-4 relative">
                <FaThumbsUp className="absolute top-[10px] left-3 text-red-500" />
              </button>
              <button style={feedBackBtn} className="ml-4 relative">
                <FaThumbsDown className="absolute top-[12px] left-3 text-red-500" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[30%]">
        <NavList/>
      </div>
    </div>
  )
};

export default PostDetails;
