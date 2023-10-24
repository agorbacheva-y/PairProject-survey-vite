import { useState } from 'react';
import Radio from "./Radio";
import Dropdown from "./Dropdown";
import Text from "./Text";
import Summary from "./Summary";
import "./Form.css";

const Form = () => {
  // State for which question is displayed
  const [ counter, setCounter ] = useState(0);

  // State for holding form data
  const [ formData, setFormData ] = useState({
    name: "",
    radio: [],
    dropdown: "",
  });

  // State for showing summary
  const [ showSummary, setShowSummary ] = useState(false);

  // State for showing questions
  const [ showQuestions, setShowQuestions ] = useState(true);

  // Function to update form
  const updateForm = (field, value) => {
    setFormData((values) => ({ ...values, [field]: value }))
  };

  // Function for prev button
  const handlePrev = () => {
    if (counter > 0) {
      setCounter((counter) => counter - 1);
    } else {
      setCounter(0);
    }
  };

  // Function for next button
  const handleNext = () => setCounter((counter) => counter + 1);

  // Function for showing summary
  const handleSubmit = () => {
    setShowSummary(!showSummary);
    setShowQuestions(!showQuestions);
  };

  // Function for survey questions
  const selectQuestion = () => {
    switch(counter) {
      case 0:
        return <Text value={formData.name} updateForm={updateForm} >What is your name?</Text>;
        break;
      case 1:
        return <Radio options={["test", "guru", "grawr"]} value={formData.radio} updateForm={updateForm} >Miau?</Radio>;
        break;
      case 2:
        return <Dropdown options={["Moo", "kas", "kwe"]} value={formData.dropdown} updateForm={updateForm} >Grawr!?</Dropdown>;
        break;
      default:
        if (counter < 0) {
          setCounter(0);
        } else {
          setCounter(2);
        }
    }
  };

  return (
    <>
      <div className={ showQuestions ? "Form" : "hidden" }>
        {selectQuestion()}
        <div className="buttons">
          <button onClick={handlePrev}>Previous</button>
          <button onClick={handleNext}>Next</button>
        </div>
        
        <button onClick={handleSubmit}>Submit</button>
      </div>

      {showSummary && (
        <Summary formData={formData} setShowQuestions={setShowQuestions} setShowSummary={setShowSummary} />
      )}
    </>
  );
};

export default Form;
