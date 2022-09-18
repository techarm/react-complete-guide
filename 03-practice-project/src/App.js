import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (user) => {
    setUsers((prevUser) => {
      return [...prevUser, user];
    });
  };

  return (
    <React.Fragment>
      <AddUser onClick={addUserHandler}></AddUser>
      <UserList items={users} />
    </React.Fragment>
  );
}

export default App;
