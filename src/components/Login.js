import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const toggleSignIn = (event) => {
    event.preventDefault();
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/4244dac6-92b3-4f0c-bca5-0973a354987d/US-en-20240603-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bgLogo"
        />
      </div>
      <div>
        <form className="bg-black text-white absolute w-3/12 my-60 mx-auto right-0 left-0 py-20 px-10 bg-opacity-80">
          <h1 className="font-bold text-2xl">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignIn && (
            <input
              type="text"
              placeholder="Email"
              className="p-4 my-4 w-full bg-gray-700 rounded-md"
            />
          )}
          <input
            type="text"
            placeholder="Email"
            className="p-4 my-4 w-full bg-gray-700 rounded-md"
          />
          <input
            type="text"
            placeholder="Password"
            className="p-4 my-4 w-full bg-gray-700 rounded-md"
          />
          <button className="py-2 my-6 bg-red-700 w-full rounded-md">
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <div className="flex text-lg">
            <p className="font-light text-gray-500">
              {isSignIn ? "New to Netflix?" : "Already registered user?"}
            </p>
            <button
              onClick={toggleSignIn}
              className="font-bold text-white px-1"
            >
              {isSignIn ? "Sign up now." : "Sign In."}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
