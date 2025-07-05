import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-5 bg-gray-50">
      <h1 className="text-[120px] m-0 text-red-600 font-bold">404</h1>
      <h2 className="text-3xl my-2.5 text-gray-800">Page Not Found</h2>
      <p className="text-lg text-gray-600 mb-8">Sorry, the page you are looking for does not exist.</p>
      <button
        onClick={() => navigate("/")}
        className="px-6 py-3 text-base text-white bg-blue-600 rounded hover:bg-blue-700 transition-colors duration-300"
      >
        Return to Home
      </button>
    </div>
  );
};

export default Error;
