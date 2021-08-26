import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetails } from "../actions/productsAction";
import { useParams } from "react-router-dom";
import { Carousel } from "react-bootstrap";
const ProductDetails = () => {
  const inlineStyle = {
    maxWidth: "3rem",
  };
  const dispatch = useDispatch();

  const { product } = useSelector((state) => state.productDetails);

  const [items, setItems] = useState("");

  const { id } = useParams();
  useEffect(() => {
    dispatch(getProductDetails(id));

    setItems(
      <Carousel>
        {product.images &&
          product.images.map((image) => (
            <Carousel.Item key={image._id}>
              <img
                className="d-block w-100"
                src={image.url}
                alt={product.name}
              />
            </Carousel.Item>
          ))}
      </Carousel>
    );
  }, [dispatch, id]);

  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 my-5">
        <div className="row gx-4 gx-lg-5 align-items-center">
          <div className="col-md-6">{items}</div>
          <div className="col-md-6">
            <div className="small mb-1">SKU: {product._id}</div>
            <h1 className="display-5 fw-bolder">{product.name}</h1>
            <div className="fs-5 mb-5">
              <span className="text-decoration-line-through"></span>
              <span>${product.price}</span>
            </div>
            <p className="lead">{product.description}</p>
            <div className="d-flex">
              <input
                className="form-control text-center me-3"
                id="inputQuantity"
                type="num"
                defaultValue="1"
                style={inlineStyle}
              />
              <button
                className="btn btn-outline-dark flex-shrink-0"
                type="button"
              >
                <i className="bi-cart-fill me-1"></i>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
