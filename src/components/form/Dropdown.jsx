const Dropdown = ({ children, options, value, formData, updateForm }) => {
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
            <option 
              key={options.indexOf(option)} 
              value={option}
            >
                {option}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default Dropdown;
