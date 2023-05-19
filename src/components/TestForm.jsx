import { useState } from "react";

 const FormCard=()=> {
  const [activeForm, setActiveForm] = useState(1);

  const handleNextClick = () => {
    setActiveForm((prevActiveForm) => prevActiveForm + 1);
  };

  return (
    <div className="form-card">
      <div
        className={`form-container form-${activeForm}`}
        style={{ height: `${activeForm * 100}px` }}
      >
        <form>
          {/* Form content goes here */}
          <h2>Form {activeForm}</h2>
          <button onClick={handleNextClick}>
            {activeForm < 5 ? "Next" : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormCard