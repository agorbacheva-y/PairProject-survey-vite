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

export default ProgressBar;
