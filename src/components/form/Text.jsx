import { validate } from "./Functions.js";

const Text = ({ children, value, formData, updateForm, setInputFilled }) => {
  const updateName = (e) => {
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
        <input
          id="questionAnswer"
          type="text"
          value={formData[value]}
          onChange={updateName}
          placeholder="Enter name"
        />
      </div>
    </>
  );
};

Text.defaultProps = {
  children: "Missing question data",
  value: "",
  formData: {},
  updateForm: () => {
    return null;
  },
  setInputFilled: () => {
    return null;
  },
};

export default Text;
