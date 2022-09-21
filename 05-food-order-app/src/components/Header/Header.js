import React from "react";
import HeaderCartButton from "./HeaderCartButton";
import style from "./Header.module.css";

const Header = () => {
  return (
    <React.Fragment>
      <div className={style.header}>
        <h2>ReactMeals</h2>
        <HeaderCartButton />
      </div>
      <div className={style["main-image"]}>
        <img src="/meals.jpeg" alt="meal" />
      </div>
    </React.Fragment>
  );
};

export default Header;
