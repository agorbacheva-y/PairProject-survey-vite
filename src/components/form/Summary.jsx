const Summary = ({
  formData,
  setFormData,
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
    setFormData(({ fortuneNumber: 0 }));
  };

  const fortuneToString = () => {
    const summary = fortuneData[parseInt(formData.fortuneNumber) - 1].summary;
    let fortune = "";
    summary.forEach((aString) => {
      fortune += aString;
      if (formData[summary.indexOf(aString)] !== undefined) {
        fortune += formData[summary.indexOf(aString)];
      }
    });
    return fortune;
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
