import React, { useRef, useState } from "react";
import Header from "./Header";
import { validation } from "../utils/validation";
import { auth } from "../utils/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_LOGO } from "../utils/constants";

const Login = () => {
  const dispatcher = useDispatch();
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef();
  const password = useRef();
  const name = useRef();
  const handleSubmit = () => {
    let message;
    if (name.current && name.current.value) {
      message = validation(
        email.current.value,
        password.current.value,
        name.current.value
      );
    } else {
      message = validation(email.current.value, password.current.value);
    }
    setErrorMessage(message);
    if (errorMessage) return;
    if (isSignIn) {
      //sign In call
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // sign Up call
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName } = auth.currentUser;
              dispatcher(addUser({ uid, email, displayName }));
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  const toggleSignIn = (event) => {
    event.preventDefault();
    setIsSignIn(!isSignIn);
    setErrorMessage(null);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="h-screen object-cover md:h-auto md:object-none"
          src={BG_LOGO}
          alt="bgLogo"
        />
      </div>
      <div className="">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="bg-black text-white rounded-lg absolute w-8/12 my-[50%] md:w-3/12 md:my-60 mx-auto right-0 left-0 md:py-20 md:px-10 bg-opacity-80"
        >
          <h1 className="font-bold text-lg p-[5%] md:p-0 md:text-2xl">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignIn && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="md:p-4 md:my-4 w-3/4 p-2 my-2 mx-[10%] md:mx-0 md:w-full bg-gray-700 rounded-md"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email"
            className="md:p-4 md:my-4 w-3/4 p-2 my-2 mx-[10%] md:mx-0 md:w-full bg-gray-700 rounded-md"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="md:p-4 md:my-4 w-3/4 p-2 my-2 mx-[10%] md:mx-0 md:w-full bg-gray-700 rounded-md"
          />
          {errorMessage && (
            <p className="text-red-700 py-3 text-xs md:text-xl mx-[5%] md:mx-0">
              {errorMessage}
            </p>
          )}
          <button
            onClick={handleSubmit}
            className="md:py-2 md:my-6 mx-[10%] md:mx-0 py-1 my-3 bg-red-700 w-9/12 md:w-full rounded-md"
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <div className="flex text-xs pb-4 mx-[10%] md:mx-0 md:pb-0 md:text-lg">
            <p className="font-light text-gray-500">
              {isSignIn ? "New to Netflix?" : "Already registered user?"}
            </p>
            <button
              onClick={toggleSignIn}
              className="font-bold text-white px-1 cursor-pointer"
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
