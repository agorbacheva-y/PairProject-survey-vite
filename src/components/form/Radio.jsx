import { validate } from "./Functions.js";

const Radio = ({
  children,
  options,
  value,
  formData,
  updateForm,
  setInputFilled,
}) => {
  const updateRadio = (e) => {
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
        <label className="question">{children}</label>
        <div className="radio">
          {options.map((option) => {
            return (
              <div key={options.indexOf(option)}>
                <label>
                  <input
                    key={options.indexOf(option)}
                    type="radio"
                    id={option}
                    name="questionAnswer"
                    value={option}
                    onChange={updateRadio}
                    checked={option === formData[value]}
                  />{" "}
                  {option}
                </label>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

Radio.defaultProps = {
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

export default Radio;
