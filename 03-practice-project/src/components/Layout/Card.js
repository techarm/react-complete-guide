import style from "./Card.module.css";

function Card(props) {
  const classes = style.card + " " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;
