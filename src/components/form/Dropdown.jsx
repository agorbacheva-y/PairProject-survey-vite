import { validate } from "./Functions.js";

const Dropdown = ({
  children,
  options,
  value,
  formData,
  updateForm,
  setInputFilled,
}) => {
  const updateSelection = (e) => {
    updateForm(value, e.target.value);
  };

  // To avoid error in console, create empty value on formData
  if (formData[value] === undefined) {
    formData[value] = "";
  }
  setInputFilled(validate(formData[value]));

  return (
    <>
      <div className="questionContainer">
        <label for="questionAnswer" className="question">
          {children}
        </label>
        <select
          id="questionAnswer"
          value={formData[value]}
          onChange={updateSelection}
        >
          <option value="">Select an option</option>
          {options.map((option) => {
            return (
              <option key={options.indexOf(option)} value={option}>
                {option}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
};

Dropdown.defaultProps = {
  children: "Missing question data",
  options: [],
  value: "",
  formData: {},
  updateForm: () => {
    return null;
  },
  setInputFilled: () => {
    return null;
  },
};

export default Dropdown;
