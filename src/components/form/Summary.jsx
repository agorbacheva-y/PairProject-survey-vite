const Summary = ({ formData }) => {
  console.log(formData);
  return (
    <>
      <div>
        <p>Name: {formData.name}</p>
        <p>Radio: {formData.radio}</p>
        <p>Dropdown: {formData.dropdown}</p>
      </div>
    </>
  )
}

export default Summary;
