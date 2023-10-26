const Text = ({ children, value, formData, updateForm }) => {
  const updateName = (e) => {
    updateForm(value, e.target.value);
  };

  // To avoid error in console, create empty value on formData
  if (formData[value] === undefined) {
    formData[value] = "";
  }

  return (
    <div className="text">
      <p className="question">{children}</p>
      <input
        label="name"
        type="text"
        value={formData[value]}
        onChange={updateName}
        placeholder="Enter name"
      />
    </div>
  );
};

export default Text;
