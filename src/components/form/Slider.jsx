const Slider = ({ children, min, max, value, formData, updateForm }) => {
  const updateValue = (e) => {
    updateForm(value, e.target.value);
  };

  if (formData[value] === undefined) {
    formData[value] = "";
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
    </>
  );
};

export default Slider;
