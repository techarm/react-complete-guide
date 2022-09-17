import { useState } from "react";
import Card from "../Layout/Card";
import Button from "../Layout/Button";
import style from "./AddUser.module.css";
import ErrorModal from "../Layout/ErrorModal";

const AddUser = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const agehangeHandler = (event) => {
    setAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();

    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }

    if (+age < 1) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }

    const newUser = {
      id: Math.random().toString(),
      name: username,
      age: age,
    };
    props.onClick(newUser);

    setUsername("");
    setAge("");
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
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
            <input
              type="text"
              id="username"
              value={username}
              onChange={usernameChangeHandler}
            ></input>
          </div>
          <div>
            <label htmlFor="age">Age (Years)</label>
            <input
              type="number"
              id="age"
              value={age}
              onChange={agehangeHandler}
            ></input>
          </div>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
