import React, { useEffect, useRef } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX_LOGO, USER_LOGO } from "../utils/constants";
import { switchToGptPage } from "../utils/gptSlice";
import { langs } from "../utils/constants";
import { modifyLangPreference } from "../utils/langConfigSlice";
import { dictLang } from "../utils/languageConstants";

const Header = () => {
  const navigate = useNavigate();
  const dispatcher = useDispatch();
  const languageSelected = useRef();
  const user = useSelector((store) => store.user);
  const lang = useSelector((store) => store.langConfig.lang);
  const gptSearchValue = useSelector((store) => store.gptOptions.togglebutton);
  const contentStyle = { background: "#000" };
  const arrowStyle = { color: "#000" };
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  const toggleGptPage = () => {
    dispatcher(switchToGptPage());
  };
  // general way of updating the dropdown value
  // const handleLangChange = (e) => {
  //   dispatcher(modifyLangPreference(e.target.value));
  // };

  // **** USING USEREF

  const handleLangChange = () => {
    dispatcher(modifyLangPreference(languageSelected.current.value));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        dispatcher(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatcher(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);
  return (
    <div className="absolute w-screen bg-gradient-to-br from-black py-4 px-10 z-10 flex justify-between">
      <img className="h-14" src={NETFLIX_LOGO} alt="netflix" />
      {user && (
        <div className="flex">
          <select
            ref={languageSelected}
            className="bg-gray-700 text-white p-2 m-2 rounded-md "
            onChange={handleLangChange}
          >
            {langs.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.value}
              </option>
            ))}
          </select>

          <button
            onClick={toggleGptPage}
            className="bg-gray-700 text-white p-2 m-2 rounded-lg"
          >
            {gptSearchValue ? dictLang[lang].home : dictLang[lang].gptSearch}
          </button>
          <Popup
            trigger={(open) => (
              <button className="flex ">
                <img className="w-14 h-14 p-2" src={USER_LOGO} alt="userLogo" />
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
              {dictLang[lang].signOut}
            </button>
          </Popup>
        </div>
      )}
    </div>
  );
};

export default Header;
