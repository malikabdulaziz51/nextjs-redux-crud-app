import globalReducers from "./reducers/globalReducers";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const store = createStore(globalReducers, applyMiddleware(thunk));

export default store;
