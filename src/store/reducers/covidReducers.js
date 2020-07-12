const initialState = {
    isLoading: true,
    listCovid: [],
    new:0,
    active:0,
    critical:0,
    recovered:0,
    total:0,
    newdeath:0,
    totaldeath:0,
    totalcase:0
};

export default function covidReducers(stateCovids = initialState, action) {
    switch (action.type) {
        case "REQUEST_DATA_SUCCESS":
            return {
                ...stateCovids,
                isLoading: false,
                listCovid: action.payload,
                new: action.payload.cases.new,
                active: action.payload.cases.active,
                critical: action.payload.cases.critical,
                recovered:action.payload.cases.recovered,
                total:action.payload.cases.total,
                newdeath:action.payload.deaths.new,
                totaldeath:action.payload.deaths.total,
                totalcase:action.payload.tests.total
            };

        case "ACTIVATE_LOADING":
            return {
                ...stateCovids,
                isLoading: true,
            };
        default:
            return stateCovids;
    }
}