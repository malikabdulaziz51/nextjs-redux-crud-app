export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";
export const GET_PRODUCTS_FAILURE = "GET_PRODUCTS_FAILURE";

export const GET_PRODUCT = "GET_PRODUCT";
export const GET_PRODUCT_SUCCESS = "GET_PRODUCT_SUCCESS";
export const GET_PRODUCT_FAILURE = "GET_PRODUCT_FAILURE";

export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const DELETE_PRODUCT_SUCCESS = "DELETE_PRODUCT_SUCCESS";
export const DELETE_PRODUCT_FAILURE = "DELETE_PRODUCT_FAILURE";

export const POST_PRODUCT = "POST_PRODUCT";
export const POST_PRODUCTS_SUCCESS = "POST_PRODUCTS_SUCCESS";
export const POST_PRODUCTS_FAILURE = "POST_PRODUCTS_FAILURE";

export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const UPDATE_PRODUCTS_SUCCESS = "UPDATE_PRODUCTS_SUCCESS";
export const UPDATE_PRODUCTS_FAILURE = "UPDATE_PRODUCTS_FAILURE";

// GET ALL PRODUCTS
export const getProducts = () => ({ type: GET_PRODUCTS });
export const getProductsSuccess = (data) => ({
	type: GET_PRODUCTS_SUCCESS,
	payload: data
});
export const getProductsFailure = () => ({ type: GET_PRODUCTS_FAILURE });

export function fetchProducts() {
	return async (dispatch) => {
		dispatch(getProducts());

		try {
			const response = await fetch("http://localhost:3000/api/products");
			const data = await response.json();
			dispatch(getProductsSuccess(data));
		} catch (error) {
			dispatch(getProductsFailure());
		}
	};
}

// GET SINGLE PRODUCT
export const getProduct = () => ({ type: GET_PRODUCT });
export const getProductSuccess = (data) => ({
	type: GET_PRODUCT_SUCCESS,
	payload: data
});
export const getProductFailure = () => ({ type: GET_PRODUCT_FAILURE });

export function fetchProduct(id) {
	return async (dispatch) => {
		dispatch(getProduct());

		try {
			const response = await fetch(`http://localhost:3000/api/products/${id}`);
			const data = await response.json();
			dispatch(getProductSuccess(data));
		} catch (error) {
			dispatch(getProductFailure());
		}
	};
}

// ADD PRODUCT
export const addProduct = () => ({ type: POST_PRODUCT });
export const addProductsSuccess = (data) => ({
	type: POST_PRODUCTS_SUCCESS,
	payload: data
});

export function postProduct(form, router) {
	return async (dispatch) => {
		dispatch(addProduct());

		try {
			const res = await fetch("http://localhost:3000/api/products", {
				method: "POST",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json"
				},
				body: JSON.stringify(form)
			}).then(setInterval(() => {}, 2000));
			dispatch(addProductsSuccess(res));
		} catch (error) {
			console.log(error);
		}
	};
}

// ADD PRODUCT
export const updateProduct = () => ({ type: UPDATE_PRODUCT });
export const updateProductsSuccess = (data) => ({
	type: UPDATE_PRODUCTS_SUCCESS,
	payload: data
});

export function putProduct(form, id) {
	return async (dispatch) => {
		dispatch(updateProduct());

		try {
			const res = await fetch(`http://localhost:3000/api/products/${id}`, {
				method: "PUT",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json"
				},
				body: JSON.stringify(form)
			}).then(setInterval(() => {}, 2000));
			dispatch(updateProductsSuccess(res));
		} catch (error) {
			console.log(error);
		}
	};
}

// DELETE PRODUCT
export const deleteProduct = () => ({ type: DELETE_PRODUCT });
export const deleteProductSuccess = () => ({
	type: DELETE_PRODUCT_SUCCESS
});
export const deleteProductFailure = () => ({ type: DELETE_PRODUCT_FAILURE });

export function destroyProduct(id, router) {
	return async (dispatch) => {
		dispatch(deleteProduct());

		try {
			const res = await fetch(`http://localhost:3000/api/products/${id}`, {
				method: "DELETE"
			}).then(setInterval(() => {}, 2000));
			dispatch(deleteProductSuccess(res));
		} catch (error) {
			dispatch(deleteProductFailure());
		}
	};
}
