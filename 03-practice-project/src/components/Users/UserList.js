import User from "./User.js";
import Card from "../Layout/Card";
import style from "./UserList.module.css";

const UserList = (props) => {
  if (!props.items.length) {
    return (
      <Card className={style.users}>
        <p style={{ textAlign: "center", padding: "20px" }}>
          No users found. Maybe add one?
        </p>
      </Card>
    );
  }

  return (
    <Card className={style.users}>
      <ul>
        {props.items.map((item) => {
          return (
            <li key={item.id}>
              <User name={item.name} age={item.age}></User>
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default UserList;
