import { Link } from "react-router-dom";
import classes from "./Products.module.css";

const Products = () => {
  return (
    <section className={classes.products}>
      <h1>The Project Page</h1>
      <ul>
        <li>
          <Link to="/products/1">A Book</Link>
        </li>
        <li>
          <Link to="/products/2">A Carpet</Link>
        </li>
        <li>
          <Link to="/products/3">A Online Course</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
