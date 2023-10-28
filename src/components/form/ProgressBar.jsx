const ProgressBar = ({ counter, length }) => {
  let progress = Math.round((counter / length) * 100);

  return (
    <>
      <div className="progressBar">
        <div className="currentProgress" style={{ width: progress + "%" }}>
          {progress}%
        </div>
      </div>
    </>
  );
};

ProgressBar.defaultProps = {
  counter: 1,
  length: 1,
};

export default ProgressBar;
