const Dropdown = ({ children, options, value, updateForm }) => {
  const updateSelection = (e) => {
    updateForm("dropdown", e.target.value);
  };

  return (
    <>
      <p>{children}</p>
      <select value={value} onChange={updateSelection}>
        <option value="">Select an option</option>
        {options.map((option) => {
          return (
            <>
              <option value={option}>{option}</option>
            </>
          );
        })}
      </select>
    </>
  );
};

export default Dropdown;
