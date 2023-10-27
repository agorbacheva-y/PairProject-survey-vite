const Summary = ({
  formData,
  setCounter,
  setShowQuestions,
  setShowSummary,
  updateForm,
  fortuneData,
}) => {
  // Function to go back to beginning of survey
  const goToStart = () => {
    setShowQuestions(true);
    setShowSummary(false);
    setCounter(0);
  };

  console.log(formData);

  return (
    <>
      <div className="summary">
        <p>{fortuneToString()}</p>
        <button onClick={goToStart}>Back to Start</button>
      </div>
    </>
  );
};

export default Summary;
