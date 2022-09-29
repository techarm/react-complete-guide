import { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isEmail = (value) => !value.includes("@");
const formControlClassName = (isValid) => {
  return `${classes.control} ${isValid ? "" : classes.invalid}`;
};

const Checkout = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    email: true,
    phoneNumber: true,
    address: true,
  });

  const nameInputRef = useRef();
  const emailAddressInputRef = useRef();
  const phoneNumberInputRef = useRef();
  const addressInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredMailAddress = emailAddressInputRef.current.value;
    const enteredPhoneNumber = phoneNumberInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredMailAddresssValid = !isEmail(enteredMailAddress);
    const enteredPhoneNumberIsValid = !isEmpty(enteredPhoneNumber);
    const enteredAddressIsValid = !isEmpty(enteredAddress);

    setFormInputsValidity({
      name: enteredNameIsValid,
      email: enteredMailAddresssValid,
      phoneNumber: enteredPhoneNumberIsValid,
      address: enteredAddressIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredMailAddresssValid &&
      enteredPhoneNumberIsValid &&
      enteredAddressIsValid;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: enteredName,
      email: enteredMailAddress,
      phoneNumber: enteredPhoneNumber,
      address: enteredAddress,
    });
  };

  return (
    <form>
      <div className={formControlClassName(formInputsValidity.name)}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputsValidity.name && <p>Please enter a valid name!</p>}
      </div>
      <div className={formControlClassName(formInputsValidity.email)}>
        <label htmlFor="name">E-mail Address</label>
        <input type="email" id="email" ref={emailAddressInputRef} />
        {!formInputsValidity.email && (
          <p>Please enter a valid email address!</p>
        )}
      </div>
      <div className={formControlClassName(formInputsValidity.phoneNumber)}>
        <label htmlFor="phonenumber">Phone Number</label>
        <input type="text" id="phonenumber" ref={phoneNumberInputRef} />
        {!formInputsValidity.phoneNumber && (
          <p>Please enter a valid phone number!</p>
        )}
      </div>
      <div className={formControlClassName(formInputsValidity.address)}>
        <label htmlFor="address">Address</label>
        <input type="text" id="address" ref={addressInputRef} />
        {!formInputsValidity.address && <p>Please enter a valid address!</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit} onClick={confirmHandler}>
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Checkout;
