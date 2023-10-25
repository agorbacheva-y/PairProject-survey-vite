const Summary = ({
  formData,
  setCounter,
  setShowQuestions,
  setShowSummary,
}) => {
  console.log(formData);

  // Function to go back to beginning of survey
  const goToStart = () => {
    setShowQuestions(true);
    setShowSummary(false);
    setCounter(0);
  };

  return (
    <>
      <div className="summary">
        <p>Name: {formData.name}</p>
        <p>Radio: {formData.radio}</p>
        <p>Dropdown: {formData.dropdown}</p>
        <button onClick={goToStart}>Back to Start</button>
      </div>
    </>
  );
};

export default Summary;

// need to fix goToStart func so it goes back to first question
