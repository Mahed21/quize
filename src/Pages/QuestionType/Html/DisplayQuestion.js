import React, { useContext, useEffect, useState } from "react";
import { COUNTER_CONTEXT } from "../../../App";

import "../question.css";

const DisplayQuestion = (props) => {
  const [checkCorrect, setCheckCorrect] = useState(false);
  const [checkWrong, setCheckWrong] = useState(false);

  const { score, setScore, counter, setCounter, page, setPages } =
    useContext(COUNTER_CONTEXT);

  const { pagesCount } = props;
  const { question, optionOne, optionTwo, optionThree, optionFour, answer } =
    props.data;

  //console.log(question, optionOne, optionTwo, optionThree, optionFour, answer);
  const option1 = () => {
    if (optionOne === answer) {
      setScore(score + 1);
      setCheckCorrect("Your Answer is Correct");
    } else {
      setCheckWrong("You give wrong answer");
    }
    pagesCount(function () {}, 2000);
  };
  const option2 = () => {
    if (optionTwo === answer) {
      setScore(score + 1);
      setCheckCorrect("Your Answer is Correct");
    } else {
      setCheckWrong("You give wrong answer");
    }
    pagesCount(function () {}, 2000);
  };
  const option3 = () => {
    if (optionThree === answer) {
      setScore(score + 1);
      setCheckCorrect("Your Answer is Correct");
    } else {
      setCheckWrong("You give wrong answer");
    }
    pagesCount(function () {}, 2000);
  };
  const option4 = () => {
    if (optionFour === answer) {
      setScore(score + 1);
      setCheckCorrect("Your Answer is Correct");
    } else {
      setCheckWrong("You give wrong answer");
    }
    pagesCount(function () {}, 4000);
  };

  //timer
  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter, setCounter]);
  return (
    <div className="flex justify-center mt-24 ">
      <div className="question-card">
        <h1 className="mb-4" style={{ fontWeight: "bolder" }}>
          Question {page} of 5
        </h1>
        <h1 className="">{question}</h1>

        <div className="question-text mb-8 mt-16 pt-4 pb-4 pl-16 pr-16">
          <h1 onClick={option1}>{optionOne}</h1>
        </div>
        <div className="question-text mb-8 pt-4 pb-4 pl-16 pr-16">
          <h1 onClick={option2}>{optionTwo}</h1>
        </div>

        <div className="question-text mb-8 pt-4 pb-4 pl-16 pr-16">
          <h1 onClick={option3}>{optionThree}</h1>
        </div>
        <div className="question-text pt-4 pb-4 pl-16 pr-16">
          <h1 onClick={option4}>{optionFour}</h1>
        </div>

        <div className="mt-8 flex justify-center">
          <p className="warning ">{checkWrong}</p>
          <p className="correct ">{checkCorrect}</p>
          {/* <button className="btn">Submit-></button> */}
        </div>
        <div className=" flex justify-end">
          <button className="btn pl-8 pr-8">{counter}</button>
        </div>
      </div>
    </div>
  );
};

export default DisplayQuestion;
