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

export const productDetailsReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case "PRODUCT_DETAILS_REQUEST":
      return {
        loading: true,
        product: [],
      };

    case "PRODUCT_DETAILS_SUCCESS":
      return {
        loading: false,
        product: action.payload,
      };

    case "PRODUCT_DETAILS_FAIL":
      return {
        loading: true,
        error: action.payload,
      };
    default:
      return state;
  }
};
