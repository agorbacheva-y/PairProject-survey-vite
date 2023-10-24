const Radio = ({ children, options, value, updateForm }) => {
  const updateRadio = (e) => {
    updateForm("radio", e.target.value);
  }

  return (
    <>
      <p>{children}</p>
      {options.map((option) => {
        return (
          <>
            <p key={options.indexOf(option)}><input type="radio" id={option} value={option} onChange={updateRadio} /> {option}</p>
          </>
        )
      })}
    </>
  );
}

export default Radio;