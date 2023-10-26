const Summary = ({
  formData,
  setCounter,
  setShowQuestions,
  setShowSummary,
}) => {
  // Function to go back to beginning of survey
  const goToStart = () => {
    setShowQuestions(true);
    setShowSummary(false);
    setCounter(0);
  };

  return (
    <>
      <div className="summary">
        {Object.entries(formData).map(([key, value]) => {
          return (
            <p>
              {key}: {value}
            </p>
          );
        })}
        <button onClick={goToStart}>Back to Start</button>
      </div>
    </>
  );
};

export default Summary;

// need to fix goToStart func so it goes back to first question
