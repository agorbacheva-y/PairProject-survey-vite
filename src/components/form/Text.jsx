const Text = ({ children, value, formData, updateForm }) => {
  const updateName = (e) => {
    updateForm(value, e.target.value);
  };

  return (
    <>
      <p>{children}</p>
      <input type="text" value={formData[value]} onChange={updateName} />
    </>
  );
};

export default Text;
