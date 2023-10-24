const Radio = ({ children, options }) => {
  return (
    <>
      <p>{children}</p>
      {options.map((option) => {
        return (
          <>
            <p><input type="radio" id={option}/> {option}</p>
          </>
        )
      })}
    </>
  );
}

export default Radio;