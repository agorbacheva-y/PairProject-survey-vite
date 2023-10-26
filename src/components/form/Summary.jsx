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

  console.log(formData);

  return (
    <>
      <div className="summary">
        {
          // using entries function to make an array with keys and value that can then use the map function
          Object.entries(formData).map(([key, value]) => {
            return (
              <p key={value}>
                {key}: {value}
              </p>
            );
          })
        }
        <button onClick={goToStart}>Back to Start</button>
      </div>
    </>
  );
};

export default Summary;