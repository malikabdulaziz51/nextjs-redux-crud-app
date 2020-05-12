import React, { useEffect } from "react";
import ProductCards from "../components/ProductCards";
import { connect } from "react-redux";
import { fetchProducts } from "../../redux/reducers/globalActions";
import { isArray } from "util";

const ProductsContainer = ({ dispatch, products, loading, hasError }) => {
	useEffect(() => {
		dispatch(fetchProducts());
	}, [dispatch]);

	const renderProductsCard = () => {
		if (loading || products == undefined || !isArray(products))
			return (
				<i
					aria-hidden="true"
					style={{ fontSize: "2em" }}
					className="spinner loading icon"
				></i>
			);
		if (hasError) return <p>Unable To Load Data</p>;

		return products.map((product) => (
			<ProductCards key={product._id} product={product} />
		));
	};
	return (
		<div>
			<h1>Products Catalog</h1>
			<div className="wrapper product-container grid">
				{renderProductsCard()}
				{/* <i aria-hidden="true" class="spinner loading icon"></i> */}
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	loading: state.products.loading,
	hasError: state.hasError,
	products: state.products.products.data
});

export default connect(mapStateToProps)(ProductsContainer);
