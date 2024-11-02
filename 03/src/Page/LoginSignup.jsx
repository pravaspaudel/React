import React from "react";

const LoginSignup = () => {
  return (
    <div className="flex justify-center items-center p-24 bg-pink-100">
      <div className="flex flex-col gap-5 w-80 md:w-96 bg-white p-8 rounded-lg shadow-lg border border-gray-200">
        <h2 className="text-2xl font-semibold text-center">Sign Up</h2>

        <input
          type="text"
          placeholder="Your Name"
          className="p-2 border border-gray-300 rounded "
        />
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 border border-gray-300 rounded "
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 border border-gray-300 rounded "
        />

        <button className="p-2 bg-red-500 text-white font-semibold rounded hover:bg-red-600 ">
          Continue
        </button>

        <div className="text-center text-sm">
          <span>Already have an account? </span>
          <a href="/login" className="text-red-500 font-medium hover:underline">
            Login here
          </a>
        </div>

        <div className="flex items-center text-xs text-gray-500">
          <input type="checkbox" className="mr-2" />
          By continuing, I agree to the terms of use & privacy policy.
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
