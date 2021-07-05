import axios from "axios";

const baseUrl = process.env.REACT_APP_USER_AUTH;

export const doLogin = (props) => {
  return async (dispatch, getState) => {
    const bodyRequest = {
      username: getState().user.namaPengguna,
      password: getState().user.kataKunci,
    };

    await axios
      .post(baseUrl + "/login", bodyRequest)
      .then(async (response) => {
        if (response.data.hasOwnProperty("username")) {
          localStorage.setItem("isLogin", true);
          localStorage.setItem("username", response.data.username);
          localStorage.setItem("email", response.data.email);
          localStorage.setItem("avatar", response.data.avatar);
          dispatch({ type: "SUCCESS_LOGIN", payload: response.data });
          //   console.warn("cek response data", response);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const checkAuth = (props) => {
  return async (dispatch, getState) => {
    const isLogin = localStorage.getItem("isLogin");
    if (getState().user.isLogin || isLogin) {
      return dispatch({
        type: "SUCCESS_LOGIN",
        payload: {
          status: "Awesome!",
          username: localStorage.getItem("username"),
          email: localStorage.getItem("email"),
          avatar: localStorage.getItem("avatar"),
        },
      });
    } else {
      return dispatch({ type: "FAIL_LOGIN", payload: getState().user });
    }
  };
};

export const changeInputUser = (el) => {
  return { type: "CHANGE_INPUT_USER", payload: el };
};

export const doLogout = (el) => {
  return async (dispatch, getState) => {
    localStorage.clear();
    dispatch({ type: "LOG_OUT", payload: el });
  };
};
