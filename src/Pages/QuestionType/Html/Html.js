import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { COUNTER_CONTEXT } from "../../../App";
import DisplayQuestion from "./DisplayQuestion";

const Html = () => {
  const location = useLocation();
  const { name } = location.state;
  console.log(name);
  const navigate = useNavigate();
  const [htmlQuestion, setHtmlQuestion] = useState([]);
  const { page, setPage, score, counter, setCounter } =
    useContext(COUNTER_CONTEXT);

  console.log(page);
  const pagesCount = () => {
    setPage(page + 1);
  };
  if (counter === 0) {
    navigate("/modalpages");
  }
  if (page === 6) {
    navigate("/modalpages");
  }

  useEffect(() => {
    fetch(`https://quize.onrender.com/${name}?page=${page}`)
      .then((res) => res.json())
      .then((data) => setHtmlQuestion(data.data));
  }, [page, name]);

  return (
    <div>
      {htmlQuestion.map((data) => (
        <DisplayQuestion
          data={data}
          key={data._id}
          pagesCount={() => pagesCount()}
        ></DisplayQuestion>
      ))}
    </div>
  );
};

export default Html;
