import { useState } from "react";

const SimpleInput = (props) => {
  const [enterdName, setEnterName] = useState("");
  const [enteredNameTouched, setEnterNameTouched] = useState(false);

  const [enterdEmail, setEnterEmail] = useState("");
  const [enteredEmailTouched, setEnterEmailTouched] = useState(false);

  const enteredNameIsValid = enterdName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const enteredEmailIsValid = enterdEmail.includes("@");
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  const formIsValid = enteredNameIsValid && enteredEmailIsValid;

  const nameInputChangeHandler = (event) => {
    setEnterName(event.target.value);
  };

  const emailInputChangeHandler = (event) => {
    setEnterEmail(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setEnterNameTouched(true);
  };

  const emailInputBlurHandler = (event) => {
    setEnterEmailTouched(true);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    setEnterNameTouched(true);
    setEnterEmailTouched(true);

    if (!enteredNameIsValid) {
      return;
    }

    if (!enteredEmailIsValid) {
      return;
    }

    console.log(
      `send data to the server: name=${enterdName}, email=${enterdEmail}`
    );

    setEnterName("");
    setEnterNameTouched(false);

    setEnterEmail("");
    setEnterEmailTouched(false);
  };

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputIsInvalid
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
      <div className={emailInputClasses}>
        <label htmlFor="name">Your Email</label>
        <input
          type="email"
          id="email"
          value={enterdEmail}
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
        />
        {emailInputIsInvalid && (
          <p className="error-text">Please enter a valid email.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
