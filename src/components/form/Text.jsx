const Text = ({ children, value, updateForm }) => {

  const updateName = (e) => {
    updateForm("name", e.target.value);
  };

  return (
    <div className="text">
      <p>{children}</p>
      <input 
      label="name"
      type="text" 
      value={value} 
      onChange={updateName} 
      placeholder="Enter name"
      />
    </div>
  );
}

export default Text;