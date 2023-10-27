const Dropdown = ({ children, options, value, formData, updateForm }) => {
  const updateSelection = (e) => {
    updateForm(value, e.target.value);
  };

  // To avoid error in console, create empty value on formData
  if (formData[value] === undefined) {
    formData[value] = "";
  }

  return (
    <>
      <p className="question">{children}</p>
      <select value={formData[value]} onChange={updateSelection}>
        <option value="">Select an option</option>
        {options.map((option) => {
          return (
            <option key={options.indexOf(option)} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default Dropdown;
