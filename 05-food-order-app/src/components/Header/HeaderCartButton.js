import CartIcon from "../Cart/CartIcon";
import style from "./HeaderCartButton.module.css";

const HeaderCartButton = () => {
  return (
    <div className={style.button}>
      <div className={style.icon}>
        <CartIcon />
      </div>
      <div>Your Card</div>
      <div className={style.badge}>2</div>
    </div>
  );
};

export default HeaderCartButton;
