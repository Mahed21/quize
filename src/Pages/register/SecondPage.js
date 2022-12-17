import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { COUNTER_CONTEXT } from "../../App";
import image from "../../images/html.jpg";
import "./register.css";

const SecondPage = () => {
  const { setNumber, setEmail, email, number } = useContext(COUNTER_CONTEXT);
  const [error, setError] = useState("");
  let navigate = useNavigate();
  const next = () => {
    if (!email) {
      setError("Email is Required");
    } else if (!number) {
      setError("Number is Required");
    } else {
      navigate("/signup2");
    }
  };
  const back = () => {
    navigate("/signup");
  };
  return (
    <div className="signUp">
      <div className="grid lg:grid-cols-2 gap-8 container mx-auto mb-8 mt-8">
        <div className="mt-5">
          <img src={image} alt="" className="img-fluid" />
        </div>

        <div className="flex justify-center m-auto">
          <div>
            <h3 className="mb-5 text-center ">SignUp Form</h3>
            <input className="me-1 additinal-input" value="+880" readOnly />
            <input
              placeholder="1xxxxxxxxx"
              className="additinal-input1"
              type="text"
              onChange={(e) => {
                setNumber(e.target.value);
              }}
            />
            <br />
            <br />
            <br />
            <input
              placeholder="Write Email Address"
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <p className="warning mt-1">{error}</p>
            <br />
            <div className="flex mb-5">
              <button
                className="mt-5 pl-7 pr-7 rounded back-btn"
                onClick={back}
              >
                Back
              </button>
              <button
                className="mt-5 btn pt-1 pb-1 ps-4 pe-4 rounded ml-7"
                onClick={next}
              >
                Next ->
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
