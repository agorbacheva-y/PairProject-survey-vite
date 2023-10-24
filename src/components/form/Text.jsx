const Text = ({ children, value, updateForm }) => {

  const updateName = (e) => {
    updateForm("name", e.target.value);
  };

  return (
    <>
      <p>{children}</p>
      <input type="text" value={value} onChange={updateName} />
    </>
  );
}

export default Text;