import Modal from "../UI/Modal/Modal";
import style from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = [
    {
      id: "c1",
      name: "Sushi",
      amount: 2,
      price: 12.99,
    },
  ].map((item) => <li key={item.id}>{item.name}</li>);

  return (
    <Modal onClose={props.onClose}>
      <ul>{cartItems}</ul>
      <div className={style.total}>
        <span>Total Amount</span>
        <span>35.64</span>
      </div>
      <div className={style.actions}>
        <button className={style["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={style.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
