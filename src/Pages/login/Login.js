import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { COUNTER_CONTEXT } from "../../App";
import image from "../../images/html.jpg";
import UseFirebase from "../Hook/UseFirebase";

const Login = () => {
  const [error, setError] = useState();
  const { emailPassLogIn } = UseFirebase();
  let navigate = useNavigate();
  const { accessToken, setAccessToken, refressToken, setRefreshToken } =
    useContext(COUNTER_CONTEXT);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const login = () => {
    if (!loginEmail) {
      setError("Email is Required");
    } else if (!loginPassword) {
      setError("Password is Required");
    } else {
      emailPassLogIn(loginEmail, loginPassword, navigate);
    }
  };
  return (
    <div>
      <div className="signUp">
        <div className="grid lg:grid-cols-2 gap-8 container mx-auto mb-8 mt-8">
          <div className="mt-5">
            <img src={image} alt="" className="img-fluid" />
          </div>

          <div className="flex justify-center m-auto">
            <div>
              <input
                placeholder="Write Email"
                type="email"
                onChange={(e) => setLoginEmail(e.target.value)}
              />
              <br />
              <br />
              <input
                placeholder="Write password"
                type="password"
                onChange={(e) => setLoginPassword(e.target.value)}
              />
              <p style={{ fontSize: "smaller" }}>
                Password Shoul be 8 correcter long
              </p>
              <br />
              <div className=" mb-5 ">
                <button
                  className="mt-5 btn pt-1 pb-1 ps-4 pe-4 rounded"
                  onClick={login}
                >
                  Login
                </button>
              </div>
              <div className="d-flex justify-content-end alreadyAccount">
                <p>
                  Don't Have an Account?{" "}
                  <NavLink to="/signup">Register Here!</NavLink>
                </p>
              </div>
              <p className="warning mt-1 text-center">{error}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
