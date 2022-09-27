import { useState } from "react";

const SimpleInput = (props) => {
  const [enterdName, setEnterName] = useState("");
  const [enteredNameTouched, setEnterNameTouched] = useState(false);

  const enteredNameIsValid = enterdName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const nameInputChangeHandler = (event) => {
    setEnterName(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setEnterNameTouched(true);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    setEnterNameTouched(true);
    if (!enteredNameIsValid) {
      return;
    }

    console.log("send data to the server: " + enterdName);

    setEnterName("");
    setEnterNameTouched(false);
  };

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enterdName}
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
