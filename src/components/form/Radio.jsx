const Radio = ({ children, options, value, formData, updateForm }) => {
  const updateRadio = (e) => {
    updateForm(value, e.target.value);
  };

  return (
    <div className="radio">
      <p className="question">{children}</p>
      {options.map((option) => {
        return (
          <div key={options.indexOf(option)}>
            <p>
              <input
                type="radio"
                id={option}
                value={option}
                onChange={updateRadio}
                checked={option === formData[value]}
                name="radio"
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
