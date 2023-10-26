import { useState } from "react";
import Radio from "./Radio";
import Dropdown from "./Dropdown";
import Text from "./Text";
import Summary from "./Summary";
import ProgressBar from "./ProgressBar";
import Slider from "./Slider";
import "./Form.css";
import data from "../../questions.json";

const Form = () => {
  const questionData = data.questions;

  // State for which question is displayed
  const [counter, setCounter] = useState(0);

  // State for holding form input
  const [formData, setFormData] = useState({});

  // State for showing summary
  const [showSummary, setShowSummary] = useState(false);

  // State for showing questions
  const [showQuestions, setShowQuestions] = useState(true);

  // State for if input is filled or not
  const [inputFilled, setInputFilled] = useState(false);

  // State for if last question is filled or not
  const [allFilled, setAllFilled] = useState(false);

  // Function to update form
  const updateForm = (field, value) => {
    setFormData((values) => ({ ...values, [field]: value }));
    setInputFilled(true);
  };

  // Function for prev button
  const handlePrev = () => {
    if (counter > 0) {
      setCounter((counter) => counter - 1);
    } else {
      setCounter(0);
    }
  };

  // Function for next button (Updated to not go out of bounds)
  const handleNext = () => {
    if (counter < questionData.length - 1) {
      setCounter((counter) => counter + 1);
    } else {
      setCounter(questionData.length - 1);
    }

    setInputFilled(false);
    allInputFilled();
  };

  // Function to check if last questions was answered
  const allInputFilled = () => {
    if (Object.keys(formData).length === questionData.length) {
      setAllFilled(true);
    }
  }

  // Function for showing summary on submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setCounter(questionData.length);
    setShowSummary(!showSummary);
    setShowQuestions(!showQuestions);
  };

  // Function for survey questions (Maybe move to another file/component?)
  const selectQuestion = () => {
    if (counter >= questionData.length) {
      return <></>;
    }
    switch (questionData[counter].type) {
      case "text":
        return (
          <Text
            value={questionData[counter].value}
            formData={formData}
            updateForm={updateForm}
          >
            {questionData[counter].question}
          </Text>
        );
      case "radio":
        return (
          <Radio
            options={questionData[counter].options}
            value={questionData[counter].value}
            formData={formData}
            updateForm={updateForm}
          >
            {questionData[counter].question}
          </Radio>
        );
      case "dropdown":
        return (
          <Dropdown
            options={questionData[counter].options}
            value={questionData[counter].value}
            formData={formData}
            updateForm={updateForm}
          >
            {questionData[counter].question}
          </Dropdown>
        );
      case "slider":
        return (
          <Slider
            value={questionData[counter].value}
            min={questionData[counter].min}
            max={questionData[counter].max}
            formData={formData}
            updateForm={updateForm}
          >
            {questionData[counter].question}
          </Slider>
        );
      default:
        return (
          <p>
            Invalid question data.
            <br />
            Please skip.
          </p>
        );
    }
  };

  return (
    <>
      <ProgressBar counter={counter} length={questionData.length} />
      <div className={showQuestions ? "form" : "hidden"}>
        {selectQuestion()}
        <div className="buttons">
          <button onClick={handlePrev}>Previous</button>
          <button disabled={inputFilled ? false : true} onClick={handleNext} >Next</button>
        </div>

        <button disabled={allInputFilled ? false : true} onClick={handleSubmit} >Submit</button>
      </div>

      {showSummary && (
        <Summary
          formData={formData}
          setCounter={setCounter}
          setShowQuestions={setShowQuestions}
          setShowSummary={setShowSummary}  
        />
      )}
    </>
  );
};

export default Form;
