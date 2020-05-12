import * as actions from "./globalActions";
import route from "next/router";

export const initialState = {
	loading: true,
	hasError: false,
	products: []
};

export default function productsReducer(state = initialState, action) {
	switch (action.type) {
		case actions.GET_PRODUCTS:
			return { ...state, loading: true };
		case actions.GET_PRODUCTS_SUCCESS:
			return { products: action.payload, loading: false };
		case actions.GET_PRODUCTS_FAILURE:
			return { ...state, loading: false, hasError: true };
		case actions.GET_PRODUCT:
			return { ...state, loading: true };
		case actions.GET_PRODUCT_SUCCESS:
			return { products: action.payload, loading: false };
		case actions.GET_PRODUCT_FAILURE:
			return { ...state, loading: false, hasError: true };
		case actions.POST_PRODUCT:
			route.push("/");
			return { ...state };
		case actions.POST_PRODUCTS_SUCCESS:
			return { products: action.payload, loading: false };
		case actions.UPDATE_PRODUCT:
			route.push("/");
			return { ...state };
		case actions.UPDATE_PRODUCTS_SUCCESS:
			return { products: action.payload, loading: false };
		case actions.DELETE_PRODUCT:
			return { ...state, loading: true };
		case actions.DELETE_PRODUCT_SUCCESS:
			route.push("/");
			return { ...state, loading: false };
		case actions.DELETE_PRODUCT_FAILURE:
			return { ...state, loading: false, hasError: true };
		default:
			return state;
	}
}
