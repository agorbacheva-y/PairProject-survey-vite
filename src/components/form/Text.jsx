const Text = ({ children, value, formData, updateForm }) => {
  const updateName = (e) => {
    updateForm(value, e.target.value);
  };

  return (
    <div className="text">
      <p>{children}</p>
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
