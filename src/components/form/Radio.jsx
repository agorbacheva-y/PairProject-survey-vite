const Radio = ({ children, options, value, updateForm }) => {
  const updateRadio = (e) => {
    updateForm("radio", e.target.value);
  };

  return (
    <div className="radio">
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
                checked={option === value}
              />{" "}
              {option}
            </p>
          </>
        );
      })}
    </div>
  );
};

export default Radio;
