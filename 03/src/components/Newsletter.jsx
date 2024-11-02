import React from "react";

const Newsletter = () => {
  return (
    <div className="flex flex-col items-center justify-center  bg-gradient-to-b from-pink-200 to-gray-100 m-20 p-28">
      <h1 className="text-3xl font-semibold text-gray-800 mb-2">
        Get Exclusive Offers On Your Email
      </h1>
      <p className="text-gray-600 mb-6">
        Subscribe to our newsletter and stay updated
      </p>
      <div className="flex items-center w-full max-w-md">
        <input
          type="email"
          placeholder="Your Email id"
          className="flex-1 px-4 py-2 rounded-l-full border border-gray-300 "
        />
        <button className="px-6 py-2 text-white bg-black rounded-r-full">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
