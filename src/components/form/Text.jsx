const Text = ({ children, value, updateForm }) => {

  const updateName = (e) => {
    updateForm("name", e.target.value);
  };

  return (
    <div className="text">
      <p>{children}</p>
      <input type="text" value={value} onChange={updateName} />
    </div>
  );
}

export default Text;