import { combineReducers } from "redux";

import productsReducer from "./ProductsReducers";

const rootReducer = combineReducers({
	products: productsReducer
});

export default rootReducer;
