import { useState, useRef } from "react";
import Card from "../Layout/Card";
import Button from "../Layout/Button";
import Wrapper from "../Helpers/Wrapper";
import ErrorModal from "../Layout/ErrorModal";
import style from "./AddUser.module.css";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    const enterUserName = nameInputRef.current.value;
    const enterAge = ageInputRef.current.value;

    if (enterUserName.trim().length === 0 || enterAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }

    if (+enterAge < 1) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }

    const newUser = {
      id: Math.random().toString(),
      name: enterUserName,
      age: enterAge,
    };
    props.onClick(newUser);

    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={style.input}>
        <form onSubmit={addUserHandler}>
          <div>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" ref={nameInputRef}></input>
          </div>
          <div>
            <label htmlFor="age">Age (Years)</label>
            <input type="number" id="age" ref={ageInputRef}></input>
          </div>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
