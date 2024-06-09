import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const contentStyle = { background: "#000" };
  const arrowStyle = { color: "#000" };
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
    <div className="absolute w-screen bg-gradient-to-br from-black py-4 px-10 z-10 flex justify-between">
      <img
        className="h-14"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="netflix"
      />
      {user && (
        <div className="flex">
          <Popup
            trigger={(open) => (
              <button className="flex ">
                <img
                  className="w-14 h-14 p-2"
                  src="https://occ-0-1723-1001.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABaOSLQEhS4tl2c7sqj78iG4xD39f79rYo1zxh5bKc4lUB5lu4GNo0afoKPJV0FTKP_ptrta5zIhdpVtDEEC_5vcMP8cdqsc.png?r=28c"
                  alt="userLogo"
                />
                {open ? (
                  <div className="h-0 w-0 border-x-8 border-x-transparent border-b-8 border-b-white-600 self-center"></div>
                ) : (
                  <div className="h-0 w-0 border-x-8 border-x-transparent border-t-8 border-t-white-600 self-center"></div>
                )}
              </button>
            )}
            position={"bottom center"}
            {...{ contentStyle, arrowStyle }}
          >
            <button onClick={handleSignOut} className="text-white p-2">
              Sign Out of Netflix
            </button>
          </Popup>
        </div>
      )}
    </div>
  );
};

export default Header;
