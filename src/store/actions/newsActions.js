import axios from "axios";

const baseUrl = process.env.REACT_APP_NEWS_API_URL;
const apiKey = process.env.REACT_APP_NEWS_API_KEY;
const urlHeadlines = baseUrl + "&apiKey=" + apiKey + "&keywords=corona";

export const getListNews = () => {
  return async (dispatch) => {
    axios
      .get(urlHeadlines)
      .then((response) => {
        // console.log(response.data.news);
        dispatch({
          type: "REQUEST_LIST_NEWS_SUCCESS",
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: "ACTIVATE_LOADING",
        });
      });
  };
};
export const getAllNews = () => {
  return async (dispatch) => {
    let url = baseUrl + "&apiKey=" + apiKey;
    axios
      .get(url)
      .then((response) => {
        // console.log(response.data.news);
        dispatch({
          type: "REQUEST_ALL_NEWS_SUCCESS",
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: "ACTIVATE_LOADING",
        });
      });
  };
};
