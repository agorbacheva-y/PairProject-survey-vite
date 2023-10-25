const ProgressBar = ({ counter, length }) => {
  let progress = (counter / (length - 1)) * 100;

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
