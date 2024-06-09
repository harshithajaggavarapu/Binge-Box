import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="absolute w-screen bg-gradient-to-br from-black p-4 z-10 flex justify-between">
      <img
        className="h-12 px-10"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="netflix"
      />
      {user && (
        <div className="flex">
          <img
            src="https://occ-0-1723-1001.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABaOSLQEhS4tl2c7sqj78iG4xD39f79rYo1zxh5bKc4lUB5lu4GNo0afoKPJV0FTKP_ptrta5zIhdpVtDEEC_5vcMP8cdqsc.png?r=28c"
            alt="userLogo"
          />
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      )}
    </div>
  );
};

export default Header;
