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
        <img src={BG_LOGO} alt="bgLogo" />
      </div>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="bg-black text-white absolute w-3/12 my-60 mx-auto right-0 left-0 py-20 px-10 bg-opacity-80"
        >
          <h1 className="font-bold text-2xl">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignIn && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="p-4 my-4 w-full bg-gray-700 rounded-md"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email"
            className="p-4 my-4 w-full bg-gray-700 rounded-md"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-4 my-4 w-full bg-gray-700 rounded-md"
          />
          {errorMessage && (
            <p className="text-red-700 py-3 text-xl">{errorMessage}</p>
          )}
          <button
            onClick={handleSubmit}
            className="py-2 my-6 bg-red-700 w-full rounded-md"
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <div className="flex text-lg">
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
