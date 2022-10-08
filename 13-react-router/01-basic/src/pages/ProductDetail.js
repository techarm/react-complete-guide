import { Link, useParams } from "react-router-dom";
import classes from "./ProductDetail.module.css";

const ProductDetail = () => {
  const params = useParams();
  console.log(params.productId);

  return (
    <section>
      <h1>Product Detail</h1>
      <p>{params.productId}</p>
      <Link className={classes["back-btn"]} to="/products">
        Back
      </Link>
    </section>
  );
};

export default ProductDetail;
