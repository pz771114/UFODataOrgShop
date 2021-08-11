export const productsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case "PRODUCTS_REQUEST":
      return {
        loading: true,
        products: [],
      };
    case "PRODUCTS_SUCCESS":
      return {
        loading: false,
        products: action.payload.products,
        productsCount: action.payload.productsCount,
      };
    case "PRODUCTS_FAIL":
      return {
        loading: true,
        error: action.payload,
      };

    default:
      return state;
  }
};
