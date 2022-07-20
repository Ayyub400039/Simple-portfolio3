import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="hero min-h-[73vh] bg-base-300">
      <div className="hero-content box-border flex-col lg:flex-row">
        <div className="box-decoration-clone text-lg text-center px-2">
          <h1 className="text-4xl font-bold">Not Found</h1>
          <p className="py-2">Back to home...</p>
          <Link to="/" className="btn glass text-xs animate-pulse">
            {" > "}
            <button>Click here to return to the home page</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
