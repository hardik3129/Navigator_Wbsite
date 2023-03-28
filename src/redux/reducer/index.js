import { combineReducers } from "redux";
import countreducer from "./count.reducer";
import apigetreducer from "./apiget.reducer";

const rootReducer = combineReducers({
    countreducer,
    apigetreducer
})

export default rootReducer