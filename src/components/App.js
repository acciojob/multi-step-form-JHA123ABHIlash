import React, { useState } from "react";
import "./../styles/App.css";
import Step from "./Step";

const App = () => {
  const [step, setStep] = useState(1);
  const [formdata, setFormdata] = useState({
    fname: "",
    lname: "",
    model: "",
    brand: "",
    card_info: "",
    card_exp: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormdata((prev) => ({ ...prev, [name]: value }));
  }

  function handleNext() {
    setStep((prev) => prev + 1);
  }

  function handlePrev() {
    setStep((prev) => prev - 1);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formdata);
  }

  return (
    <div>
      {/* Do not remove the main div */}
      <Step
        step={step}
        formdata={formdata}
        handleChange={handleChange}
        handleNext={handleNext}
        handlePrev={handlePrev}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default App;
