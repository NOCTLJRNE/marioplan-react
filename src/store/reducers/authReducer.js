const initState = {};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      console.error("login error");
      return {
        ...state,
        authError: "Login failed"
      };
    case "LOGIN_SUCCESS":
      console.log("login success");
      return {
        ...state,
        authError: null
      };
    case "LOGOUT_SUCCESS":
      console.log("logout success");
      return state;
    case "SIGNUP_ERROR":
      console.error("Sign up error");
      return {
        ...state,
        authError: action.err.message
      };
    case "SIGNUP_SUCCESS":
      console.log("Sign up success");
      return {
        ...state,
        authError: null
      };
    default:
      return state;
  }
};
export default authReducer;
