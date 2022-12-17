import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import FirstPage from "./Pages/register/FirstPage";
import Login from "./Pages/login/Login";
import SecondPage from "./Pages/register/SecondPage";
import FinalPage from "./Pages/register/FinalPage";
import { createContext, useState } from "react";
import Navbar from "./Pages/Navbar/Navbar";
import Html from "./Pages/QuestionType/Html/Html";
import ModalPages from "./Pages/QuestionType/ModalPages";

export const COUNTER_CONTEXT = createContext();

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setpassword] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [refressToken, setRefreshToken] = useState("");
  const [page, setPage] = useState(1);
  const [score, setScore] = useState(0);
  const [user, setUser] = useState({});
  const [counter, setCounter] = useState(60);
  const [error, setError] = useState();
  const value = {
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
    accessToken,
    setAccessToken,
    refressToken,
    setRefreshToken,
    page,
    setPage,
    score,
    setScore,
    user,
    setUser,
    counter,
    setCounter,
    error,
    setError,
  };
  return (
    <div>
      <COUNTER_CONTEXT.Provider value={value}>
        <Navbar></Navbar>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/signup" element={<FirstPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup1" element={<SecondPage />} />
          <Route path="/signup2" element={<FinalPage />} />
          <Route path="/html" element={<Html />} />
          <Route path="/modalpages" element={<ModalPages />} />
        </Routes>
      </COUNTER_CONTEXT.Provider>
    </div>
  );
}

export default App;
