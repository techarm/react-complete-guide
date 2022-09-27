import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enterdName, setEnterName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnterNameTouched] = useState(false);

  const nameInputChangeHandler = (event) => {
    setEnterName(event.target.value);

    if (event.target.value.trim() !== "") {
      setEnteredNameIsValid(true);
    }
  };

  const nameInputBlurHandler = (event) => {
    setEnterNameTouched(true);

    if (enterdName.trim() === "") {
      setEnteredNameIsValid(false);
    }
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    setEnterNameTouched(true);

    if (enterdName.trim() === "") {
      setEnteredNameIsValid(false);
      return;
    }

    console.log("submit data to the server: " + enterdName);

    setEnteredNameIsValid(true);
    setEnterName("");
  };

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

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
          ref={nameInputRef}
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
