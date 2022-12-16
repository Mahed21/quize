import React, { useContext } from "react";
import htmlimg from "../images/html1.jpg";
import css from "../images/html.jpg";
import js from "../images/js.jpg";
import react from "../images/react.png";
import nodejs from "../images/node.jpg";
import html from "../images/html.jpg";
import { COUNTER_CONTEXT } from "../App";
import "./style.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const { setPage, setScore, user, setCounter } = useContext(COUNTER_CONTEXT);

  setPage(1);
  setScore(0);
  setCounter(60);

  const htmlPage = () => {
    if (!user) {
      navigate("/login");
    } else {
      navigate("/html", {
        state: {
          name: "html",
        },
      });
    }
  };
  const cssPage = () => {
    if (!user) {
      navigate("/login");
    } else {
      navigate("/html", {
        state: {
          name: "css",
        },
      });
    }
  };
  const bootstrapPage = () => {
    if (!user) {
      navigate("/login");
    } else {
      navigate("/html", {
        state: {
          name: "bootstrap",
        },
      });
    }
  };
  const javascriptPage = () => {
    if (!user) {
      navigate("/login");
    } else {
      navigate("/html", {
        state: {
          name: "js",
        },
      });
    }
  };
  const reactPage = () => {
    if (!user) {
      navigate("/login");
    } else {
      navigate("/html", {
        state: {
          name: "react",
        },
      });
    }
  };
  const nodejsPage = () => {
    if (!user) {
      navigate("/login");
    } else {
      navigate("/html", {
        state: {
          name: "node",
        },
      });
    }
  };

  return (
    <div>
      <div className="grid lg:grid-cols-3 gap-8 container mx-auto mb-8 mt-8">
        {/* html */}
        <div className="card w-96 bg-base-100 shadow-xl mb-1">
          <figure className="px-10 pt-10">
            <img src={htmlimg} alt="" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">HTML</h2>
            <p>
              There will be 5 Question Related to Html you have to answer within
              1 minute
            </p>
            <div className="card-actions">
              <button className="btn btn-primary" onClick={htmlPage}>
                Start Now
              </button>
            </div>
          </div>
        </div>
        {/* css */}
        <div className="card w-96 bg-base-100 shadow-xl mb-1">
          <figure className="px-10 pt-10">
            <img src={css} alt="" className="rounded-xl h-48" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">CSS</h2>
            <p>
              There will be 5 Question Related to CSS you have to answer within
              1 minute
            </p>
            <div className="card-actions">
              <button className="btn btn-primary" onClick={cssPage}>
                Start Now
              </button>
            </div>
          </div>
        </div>
        {/* Javascript */}
        <div className="card w-96 bg-base-100 shadow-xl mb-1">
          <figure className="px-10 pt-10">
            <img src={js} alt="" className="rounded-xl h-48" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Javascript</h2>
            <p>
              There will be 5 Question Related to Javascript you have to answer
              within 1 minute
            </p>
            <div className="card-actions">
              <button className="btn btn-primary" onClick={javascriptPage}>
                Start Now
              </button>
            </div>
          </div>
        </div>
        {/* bootstrap */}
        <div className="card w-96 bg-base-100 shadow-xl mb-1">
          <figure className="px-10 pt-10">
            <img src={html} alt="" className="rounded-xl h-48" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">BOOTSTRAP</h2>
            <p>
              There will be 5 Question Related to bootstrap you have to answer
              within 1 minute
            </p>
            <div className="card-actions">
              <button className="btn btn-primary" onClick={bootstrapPage}>
                Start Now
              </button>
            </div>
          </div>
        </div>
        {/* React */}
        <div className="card w-96 bg-base-100 shadow-xl mb-1">
          <figure className="px-10 pt-10">
            <img src={react} alt="" className="rounded-xl h-48" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">REACT!</h2>
            <p>
              There will be 5 Question Related to React you have to answer
              within 1 minute
            </p>
            <div className="card-actions">
              <button className="btn btn-primary" onClick={reactPage}>
                Start Now
              </button>
            </div>
          </div>
        </div>
        {/* Nodejs */}
        <div className="card w-96 bg-base-100 shadow-xl mb-1">
          <figure className="px-10 pt-10">
            <img src={nodejs} alt="" className="rounded-xl h-48" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">NODEJS!</h2>
            <p>
              There will be 5 Question Related to Nodejs you have to answer
              within 1 minutet
            </p>
            <div className="card-actions">
              <button className="btn btn-primary" onClick={nodejsPage}>
                Start Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
