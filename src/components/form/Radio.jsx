const Radio = ({ children, options, value, updateForm }) => {
  const updateRadio = (e) => {
    updateForm("radio", e.target.value);
  };

  return (
    <div className="radio">
      <p>{children}</p>
      {options.map((option) => {
        return (
          <div key={options.indexOf(option)}>
            <p >
              <input
                type="radio"
                id={option}
                value={option}
                onChange={updateRadio}
                checked={option === value}
              />{" "}
              {option}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Radio;
