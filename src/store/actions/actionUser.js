import axios from 'axios';

export const doLogin = (props) => {
    return async (dispatch, getState) => {
        const bodyRequest = {
            username: getState().user.namaPengguna,
            password: getState().user.kataKunci
        };

        await axios
        .post("https://sugawarawarakun.free.beeceptor.com/login", bodyRequest)
        .then(async (response) => {
            if (response.data.hasOwnProperty("username")) {
                dispatch({ type: "SUCCESS_LOGIN", payload: response.data })
                console.warn("cek response data",response)
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    };
};

export const changeInputUser = (el) => {return {type: "CHANGE_INPUT_USER", payload: el, }};

export const doLogout = (el) => {
    return {
        type: "LOG_OUT",
        payload: el,
    }
}