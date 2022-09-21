import style from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={style.input}>
      <label>{props.label}</label>
      <input type={props.type} value={props.value} onChange={props.onChange} />
    </div>
  );
};

export default Input;
