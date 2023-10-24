import { useState } from 'react';
import Radio from "./Radio";

const Question = () => {
  const [ counter, setCounter ] = useState(0);

  // Functions for prev and next buttons
  const handlePrev = () => {
    if (count > 0) {
      setCounter((count) => count - 1);
    } else {
      setCounter(0);
    }
  };

  const handleNext = () => setCounter((count) => count + 1);

  const selectQuestion = () => {
    switch(counter) {
      case 0:
        return "What do you want?";
        break;
      case 1:
        return <Radio options={["test", "guru", "grawr"]}>Miau?</Radio>;
        break;
      default:
        setCounter(0);
    }
  }

  return (
    <div>
      {selectQuestion()}
      <button onClick={handlePrev}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </div>
  )
}

export default Question;
