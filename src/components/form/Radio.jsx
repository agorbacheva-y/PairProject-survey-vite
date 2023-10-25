const Radio = ({ children, options, value, formData, updateForm }) => {
  const updateRadio = (e) => {
    updateForm(value, e.target.value);
  };

  return (
    <>
      <p>{children}</p>
      {options.map((option) => {
        return (
          <>
            <p key={options.indexOf(option)}>
              <input
                type="radio"
                id={option}
                value={option}
                onChange={updateRadio}
                checked={option === formData[value]}
              />{" "}
              {option}
            </p>
          </>
        );
      })}
    </>
  );
};

export default Radio;
