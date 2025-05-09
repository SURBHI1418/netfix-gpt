import React, { useRef } from "react";
import Header from "./Header";
import { useState } from "react";
import { checkValidateData } from "../utils/vaildate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_IMG_URL, USER_AVATER } from "../utils/constant";
const Signup = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const toggleSignUpForm = () => {
    setSignInForm(!isSignInForm);
  };
  const handleButtonClick = () => {
    const message = checkValidateData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    if (message) return;
    //Sign In - Sign up Login

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATER,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;

              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              // ...
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute w-full">
        <img className="w-full h-screen object-cover" src={BG_IMG_URL} alt="bg-img" />
      </div>
 
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" absolute  w-full md:w-3/12 p-8 text-white rounded-lg bg-opacity-80 bg-black my-36 mx-auto right-0 left-0"
      >
        <h1 className="text-3xl font-bold py-5 mx-3 ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="m-2 py-2 px-4 w-full bg-transparent border border-gray-400 rounded-md text-white"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email Id"
          className="m-2 py-2 px-4 w-full bg-transparent border border-gray-400 rounded-md text-white"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="m-2 py-2 px-4 w-full bg-transparent border border-gray-400 rounded-md text-white"
        />

        <p className="text-red-600 m-4 font-bold text-lg">{errorMessage}</p>

        <button
          className="m-4 py-4 px-2 mx-2 bg-red-600 w-full rounded-md"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer " onClick={toggleSignUpForm}>
          {isSignInForm
            ? "New to Netflix?Sign Up now."
            : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Signup;
