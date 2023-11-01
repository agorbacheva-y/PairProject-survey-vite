import { validate } from "./Functions.js";

const Slider = ({
  children,
  min,
  max,
  value,
  formData,
  updateForm,
  setInputFilled,
}) => {
  const updateValue = (e) => {
    updateForm(value, e.target.value);
  };

  // To avoid error in console, create empty value on formData
  if (formData[value] === undefined) {
    formData[value] = 0;
  }
  setInputFilled(validate(formData[value]));

  return (
    <>
      <div className="questionContainer">
        <label for="questionAnswer">{children}</label>
        <input
          id="questionAnswer"
          className="slider"
          type="range"
          min={min}
          max={max}
          value={formData[value]}
          onChange={updateValue}
        />
        <p>{formData[value]}</p>
      </div>
    </>
  );
};

Slider.defaultProps = {
  children: "Missing question data",
  min: 0,
  max: 0,
  value: 0,
  formData: {},
  updateForm: () => {
    return null;
  },
  setInputFilled: () => {
    return null;
  },
};

export default Slider;
