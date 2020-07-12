const initialState = {
    listNews: [],
    isLoading: true,
    search: "",
    allNews: []
};

export default function newsReducer(stateNews = initialState, action) {
    switch (action.type) {
        case "REQUEST_LIST_NEWS_SUCCESS":
            return {
                ...stateNews,
                isLoading: false,
                listNews: action.payload.news,
                allNews: action.payload.news,
            };
        case "ACTIVATE_LOADING":
            return {
                ...stateNews,
                isLoading: true,
            };
        case "SEARCH_INPUT":
            return {
                ...stateNews,
                search: action.payload
            };
        default:
            return stateNews;
    }
}