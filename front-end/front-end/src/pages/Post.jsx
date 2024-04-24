import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import post from "../../src/assets/image/post1.jpg";
import post2 from "../uploads/imagepost/BROCCOLI_180x@2x.jpg"
import axios from "axios";
const Post = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5001/api/postAll`)
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(data);

  const getdateData = (data) =>{
    const createdAtDate = new Date(data.createdAt)
    const day = createdAtDate.getDate();
    const month = createdAtDate.getMonth() + 1; // Tháng bắt đầu từ 0 nên cần cộng thêm 1
    const formattedDate = `${day}/${month}/`;
    return formattedDate
  }

  return (
    <div className="container-lg">
      <div>
        <h1 className="text-center text-2xl font-bold">FRESH STORIES</h1>
      </div>
      <div className="w-[100%] flex justify-between flex-wrap">
        {data.map((data) => (
          <div className="w-[33.33%] mt-5 px-3" key={data.id}>
            <img
              src={require(`../uploads/imagepost/${data.image}`)}
             
              alt=""
              className="w-[100%] h-[350px]"
            />

            <p className="font-bold py-2 text-2xl h-[100px]">{data.title}</p>
            <p className="font-medium">{data.username}</p>
            <p className="h-[50px] truncate ">{data.desc}</p>
            <Link className="bg-green-600 p-3 rounded-full text-white font-bold" to={`/PostDetails/${data._id}`}>
              Read more
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Post;
