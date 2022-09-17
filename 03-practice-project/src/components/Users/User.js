const User = (props) => {
  return (
    <div>
      <span>{props.name} </span>
      <span>({props.age}) years old</span>
    </div>
  );
};

export default User;
