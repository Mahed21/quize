import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { COUNTER_CONTEXT } from "../../App";
import image from "../../images/html.jpg";
import UseFirebase from "../Hook/UseFirebase";

const FinalPage = () => {
  const { emailPassSignIn } = UseFirebase();

  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    number,
    setNumber,
    password,
    setpassword,
    error,
    setError,
  } = useContext(COUNTER_CONTEXT);
  let navigate = useNavigate();
  const back = () => {
    navigate("/signup1");
  };
  const signUp = () => {
    if (password.length < 8) {
      setError("password should be atleast 8 character long");
    } else {
      console.log(firstName, lastName, email, number, password);

      emailPassSignIn(email, password, navigate);

      setFirstName("");
      setLastName("");
      setEmail("");
      setNumber("");
      setpassword("");
      //navigate("/login");
    }
  };
  return (
    <div className="signUp">
      <div className="grid lg:grid-cols-2 gap-8 container mx-auto mb-8 mt-8">
        <div className="mt-5">
          <img src={image} alt="" className="img-fluid" />
        </div>

        <div className="flex justify-center m-auto">
          <div>
            <input
              placeholder="Write password"
              type="password"
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
            <p style={{ fontSize: "smaller" }}>
              Password Shoul be 8 correcter long
            </p>
            <br />
            <div className="flex justify-between mb-5 ">
              <button
                className="mt-5 pl-7 pr-7 rounded back-btn"
                onClick={back}
              >
                Back
              </button>
              <button
                className="mt-5 btn pt-1 pb-1 ps-4 pe-4 rounded"
                onClick={signUp}
              >
                Sign Up
              </button>
            </div>
            <p className="warning mt-1 text-center">{error}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalPage;
