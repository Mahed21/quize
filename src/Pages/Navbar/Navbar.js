import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { COUNTER_CONTEXT } from "../../App";
import UseFirebase from "../Hook/UseFirebase";
import "../style.css";

const Navbar = () => {
  let navigate = useNavigate();
  const { user, setUser } = useContext(COUNTER_CONTEXT);
  const { Logout } = UseFirebase();
  //console.log(user);

  return (
    <div>
      <div className="navbar bg-base-100 pt-4 pb-4 pl-16 pr-16">
        <div className="navbar-start">
          <NavLink className="btn btn-ghost normal-case text-xl">Quize</NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1"></ul>
        </div>
        <div className="navbar-end">
          <NavLink className="btn mr-4" to="/">
            Home
          </NavLink>
          {user.email ? (
            <NavLink className="btn" to="" onClick={Logout}>
              Logout
            </NavLink>
          ) : (
            <NavLink className="btn" to="/signup">
              Registration
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
