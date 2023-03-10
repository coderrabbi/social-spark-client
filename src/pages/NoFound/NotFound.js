import React from "react";
import { Link } from "react-router-dom";
import notFound from "../../assets/notFound.svg";
const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      {" "}
      <img src={notFound} alt="" className=" w-4/6" />
      <Link to="/">
        {" "}
        <button className="bg-gray-900 text-white px-3 py-3 rounded-xl">
          BACK TO HOME
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
