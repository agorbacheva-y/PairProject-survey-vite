const ProgressBar = ({ counter, length }) => {
  let progress = Math.round((counter / (length)) * 100);

  return (
    <>
      <div id="progressBar">
        <div id="currentProgress" style={{ width: progress + "%" }}>
          {progress}%
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
