import axios from 'axios';

const rapidKey = process.env.REACT_APP_API_KEY;
const rapidHost = process.env.REACT_APP_API_HOST;
const urlCovid = process.env.REACT_APP_API_URL;
console.warn("hey", rapidKey);
export const generateCovid = (country = "indonesia") => {
    return async (dispatch) => {

        axios({
                "method": "GET",
                "url": urlCovid,
                "headers": {
                    "content-type": "application/octet-stream",
                    "x-rapidapi-host": rapidHost,
                    "x-rapidapi-key": rapidKey
                },
                "params": {
                    "country": country
                }
            })
            .then((response) => {
                console.warn("hello", response.data.response[0].cases.new);
                dispatch({
                    type: "REQUEST_DATA_SUCCESS",
                    payload: response.data.response[0]
                })
            })
            .catch((error) => {
                console.log(error)
            })

    }
};