const initialState = {
    username: "",
    email: "",
    avatar: "",
    is_login: false,
};

export default function userReducer(userState = initialState, action) {
  switch (action.type) {
    case "CHANGE_INPUT_USER":
      return {
        ...userState,
        [action.payload.target.name]: action.payload.target.value,
      };
    case "SUCCESS_LOGIN":
      return {
        ...userState,
        username: action.payload.username,
        email: action.payload.email,
        avatar: action.payload.avatar,
        is_login: true,
      };
    case "LOG_OUT":
      return {
        is_login: false,
      };

    default:
      return userState;
  }
}
