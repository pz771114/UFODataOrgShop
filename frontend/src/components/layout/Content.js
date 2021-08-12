import Product from "../product";

import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../actions/productsAction";
import { useEffect } from "react";
import LoaderSpinner from "./LoaderSpinner";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

const Content = () => {
  const { loading, products, productsCount, error } = useSelector(
    (state) => state.products
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      return toast.error("An unexpected error occurred", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    }
    dispatch(getProducts());
  }, [dispatch, error]);

  const productsDiv = products
    ? products.map((product) => <Product product={product} key={product._id} />)
    : "";
  return (
    <section className="py-5">
      <Helmet>
        <title>Shop - UFODATA</title>
        <meta
          name="description"
          content="Best UFO Alien accessories - UFODATA"
        />
      </Helmet>

      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {loading ? <LoaderSpinner /> : productsDiv}
        </div>
      </div>
    </section>
  );
};

export default Content;
