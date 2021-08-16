import axios from "axios";

export const getProducts = () => async (dispatch) => {
  try {
    dispatch({
      type: "PRODUCTS_REQUEST",
    });

    const { data } = await axios.get("/api/v1/products");

    dispatch({
      type: "PRODUCTS_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "PRODUCTS_FAIL",
      payload: error.message,
    });
  }
};

export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: "PRODUCT_DETAILS_REQUEST" });

    const { data } = await axios.get(`/api/v1/product/${id}`);

    dispatch({ type: "PRODUCT_DETAILS_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "PRODUCT_DETAILS_FAIL", payload: error.message });
  }
};
