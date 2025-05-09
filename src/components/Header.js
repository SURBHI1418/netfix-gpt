import React from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGE } from "../utils/constant";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        navigate("/error");

        // An error happened.
      });
  };
  useEffect(() => {
    const unsbscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;

        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/Browser");
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    // Unsubscribe when component unmounts
    return () => unsbscribe();
  }, [dispatch, navigate]);

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  const handleGptSearchClick = () => {
    //Toggle GPT Search
    dispatch(toggleGptSearchView());
  };
  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex  flex-col md:flex-row justify-between  ">
      <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="logo" />
      {user && (
        <div className="flex justify-between">
          {showGptSearch && (
            <select
              className="px-2 m-5 mx-1 md:p-1 bg-gray-900 text-white rounded-lg md:px-4 "
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGE?.map((languageContants) => (
                <option
                  key={languageContants.identifier}
                  value={languageContants.identifier}
                >
                  {languageContants.name}
                </option>
              ))}
            </select>
          )}
          <button
            className=" m-5 px-5 bg-white rounded-lg "
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Home Page" : " GPT Search"}
          </button>
          <img
            className="w-14 h-16 p-1 my-5 hidden md:block  "
            src={user?.photoURL}
            alt="user-icon"
          />
          <button onClick={handleSignOut} className=" text-white font-bold">
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
