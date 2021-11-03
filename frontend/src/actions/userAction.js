import axios from "axios";

//User login
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: "LOGIN_REQUEST" });

    const loginConfig = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/v1/login",
      { email, password },
      loginConfig
    );

    dispatch({ type: "LOGIN_SUCCESS", payload: data.user });
  } catch (error) {
    dispatch({ type: "LOGIN_FAIL", payload: error.message });
  }
};

//User logout
export const logout = () => async (dispatch) => {
  try {
    await axios.get("/api/v1/logout");

    dispatch({ type: "LOGOUT_SUCCESS" });
  } catch (error) {
    dispatch({ type: "LOGOUT_FAIL", payload: error.message });
  }
};
