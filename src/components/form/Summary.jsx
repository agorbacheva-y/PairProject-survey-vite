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

  const generateFortune = () => {
    switch (formData.fortuneNumber) {
      case 1:
        break;
      case 2:
        break;
      case 3:
        break;
      case 4:
        break;
      case 5:
        break;
      default:
        return `You entered an invalid input! You shall be cursed!`;
    }
  };

  return (
    <>
      <div className="summary">
        {
          // using entries function to make an array with keys and value that can then use the map function
          Object.entries(formData).map(([key, value]) => {
            return (
              <p>
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

// need to fix goToStart func so it goes back to first question
