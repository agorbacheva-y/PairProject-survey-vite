const Dropdown = ({ children, options, value, formData, updateForm }) => {
  const updateSelection = (e) => {
    updateForm(value, e.target.value);
  };

  return (
    <>
      <p>{children}</p>
      <select value={formData[value]} onChange={updateSelection}>
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
