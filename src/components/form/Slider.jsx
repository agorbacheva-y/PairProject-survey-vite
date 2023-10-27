const Slider = ({ children, min, max, value, formData, updateForm }) => {
  const updateValue = (e) => {
    updateForm(value, e.target.value);
  };

  // To avoid error in console, create empty value on formData
  if (formData[value] === undefined) {
    formData[value] = 0;
  }

  return (
    <>
      <p>{children}</p>
      <input
        className="slider"
        type="range"
        min={min}
        max={max}
        value={formData[value]}
        onChange={updateValue}
      />
      <p>{formData[value]}</p>
    </>
  );
};

export default Slider;
