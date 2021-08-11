import axios from "axios";

export const getProducts = () => async (dispatch) => {
  try {
    dispatch({
      type: "PRODUCTS_REQUEST",
    });

    const { data } = await axios.get("/api/v2/products");

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
