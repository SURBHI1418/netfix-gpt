import React from "react";
import Header from "./Header";
import { useState } from "react";
const Signup = () => {
  const [isSignUpForm, setSignUpForm] = useState(true);

  const toggleSignUpForm = () => {
    setSignUpForm(!isSignUpForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute w-full">
        <img
          className="w-full"
          src="https://flexsub.shop/content/images/2021/11/1_5lyavS59mazOFnb55Z6znQ.png"
          alt="bg-img"
        />
      </div>

      <form className=" absolute  w-3/12 p-8 text-white rounded-lg bg-opacity-80 bg-black my-36 mx-auto right-0 left-0">
        <h1 className="text-3xl font-bold py-5 mx-3 ">
          {isSignUpForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignUpForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="m-2 py-2 px-4 w-full bg-transparent border border-gray-400 rounded-md text-white"
          />
        )}

        <input
          type="text"
          placeholder="Email or phone number"
          className="m-2 py-2 px-4 w-full bg-transparent border border-gray-400 rounded-md text-white"
        />

        <input
          type="password"
          placeholder="Password"
          className="m-2 py-2 px-4 w-full bg-transparent border border-gray-400 rounded-md text-white"
        />
        {!isSignUpForm && (
          <input
            type="confirm password"
            placeholder="Confirm Password"
            className="m-2 py-2 px-4 w-full bg-transparent border border-gray-400 rounded-md text-white"
          />
        )}

        <button className="m-4 py-4 px-2 mx-2 bg-red-600 w-full rounded-md">
          {isSignUpForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer " onClick={toggleSignUpForm}>
          {isSignUpForm
            ? "New to Netflix?Sign Up now."
            : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Signup;
