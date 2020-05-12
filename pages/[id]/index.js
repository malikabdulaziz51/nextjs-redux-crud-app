import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import { Confirm, Button, Loader } from "semantic-ui-react";
import {
	fetchProduct,
	destroyProduct
} from "../../redux/reducers/globalActions";
import NumberFormat from "react-number-format";

const Product = ({ dispatch, product, hasError }) => {
	const router = useRouter();

	const getId = router.query.id;
	const [confirm, setConfirm] = useState(false);
	const [isDeleting, setIsDeleting] = useState(false);

	const open = () => setConfirm(true);
	const close = () => setConfirm(false);

	useEffect(() => {
		dispatch(fetchProduct(getId));
	}, [dispatch]);

	const handleDelete = () => {
		setIsDeleting(true);
		close();
	};

	useEffect(() => {
		if (isDeleting) {
			dispatch(destroyProduct(getId, router));
		}
		() => {};
	}, [isDeleting, dispatch]);

	const renderProduct = () => {
		if (!product)
			return (
				<>
					<h1>Detail Product</h1>
					<i
						aria-hidden="true"
						style={{ fontSize: "2em" }}
						className="spinner loading icon"
					></i>
				</>
			);
		return (
			<>
				<h1>Detail Product</h1>;
				{isDeleting ? (
					<Loader active />
				) : (
					<div className="detail-wrapper">
						<div className="product-screen">
							<div className="photo-section">
								<img src={product.photoURI} alt="photo-thumb" />
							</div>
							<div className="information-section">
								<div className="detail-section name">
									<h1>{product.name}</h1>
								</div>

								<div className="detail-section price">
									<div className="title">
										<p>Price</p>
									</div>
									<div className="content">
										<h3>
											<NumberFormat
												value={product.price}
												displayType={"text"}
												thousandSeparator={true}
												prefix={"Rp"}
											/>
										</h3>
									</div>
								</div>

								<div className="detail-section product-information">
									<div className="title">
										<p>Product Information</p>
									</div>
									<div className="content">
										<p>
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Vero similique quae dicta quisquam illum, corrupti
											praesentium. Tempore nam optio odio quae ex sit iusto
											accusamus perferendis atque, aut, voluptates saepe!
										</p>
									</div>
								</div>
								<div className="detail-section">
									<div className="delete">
										<Button color="red" onClick={open}>
											Delete
										</Button>
									</div>
								</div>
							</div>
						</div>
					</div>
				)}
				<Confirm open={confirm} onCancel={close} onConfirm={handleDelete} />
			</>
		);
	};

	return <div className="wrapper">{renderProduct()}</div>;
};

const mapStateToProps = (state) => ({
	product: state.products.products.data,
	loading: state.loading
});

export default connect(mapStateToProps)(Product);
