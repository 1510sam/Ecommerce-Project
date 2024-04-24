import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
const LoginComponent = () => {

  const status = window.localStorage.getItem("success")

  if (status != null) {
    return ( 
        <Link
          className="px-3 mt-2 text-3xl hover:text-yellow-500"
          to={"/UserDetail"}
        >
          <FaUser className="" />
        </Link>
     
    );
  }else
  {
    return (
        <Link className="px-3 mt-2 text-3xl hover:text-yellow-500" to={"/Login"}>
        <FaUser className="" />
      </Link>
    )
  }
};

export default LoginComponent;
