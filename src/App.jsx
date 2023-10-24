import { useState } from "react";
import Header from "./components/Header";
import Form from "./components/form/Form";


export const App = () => {
  // State for showing summary
  const [ showSummary, setShowSummary ] = useState(false);

  // Function for showing summary
  const handleSubmit = () => {
  setShowSummary(!showSummary);
  };

  return (
    <>
      <Header />
      <Form />
    </>
  );
};
