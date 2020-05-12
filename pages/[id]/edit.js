import { useState, useEffect } from "react";
import { Button, Form, Loader } from "semantic-ui-react";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import { fetchProduct, putProduct } from "../../redux/reducers/globalActions";

const EditProduct = ({ dispatch, product }) => {
	const [form, setForm] = useState({
		name: "",
		price: "",
		photoURI: ""
	});
	const [isSubmit, setIsSubmit] = useState(false);
	const [errors, setErrors] = useState({});
	const router = useRouter();

	const getId = router.query.id;

	useEffect(() => {
		dispatch(fetchProduct(getId));
	}, [dispatch]);

	useEffect(() => {
		if (product.length != 0) {
			setForm({
				name: product.data.name,
				price: product.data.price,
				photoURI: product.data.photoURI
			});
		}
	}, [product]);

	useEffect(() => {
		if (isSubmit) {
			if (Object.keys(errors).length === 0) {
				dispatch(putProduct(form, getId));
			} else {
				setIsSubmit(false);
			}
		}
	}, [dispatch, errors]);

	const handleSubmit = (e) => {
		e.preventDefault();
		let err = validate();
		setErrors(err);
		setIsSubmit(true);
	};
	const handleChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value
		});
	};

	const validate = () => {
		let err = {};

		if (!form.name) {
			err.name = "Name is required";
		}
		if (!form.price) {
			err.price = "Price is required";
		}
		if (!form.photoURI) {
			err.photoURI = "Photo URL is required";
		}

		return err;
	};

	return (
		<div className="form-container">
			<h1>Edit Product</h1>
			<div>
				{isSubmit || product.length == 0 ? (
					<Loader active inline="centered" />
				) : (
					<Form onSubmit={handleSubmit}>
						<Form.Input
							fluid
							error={
								errors.name
									? { content: "Please enter a name", pointing: "below" }
									: null
							}
							label="Product Name"
							placeholder="Product Name"
							name="name"
							value={form.name}
							onChange={handleChange}
						/>
						<Form.Input
							fluid
							error={
								errors.price
									? { content: "Please enter a price", pointing: "below" }
									: null
							}
							label="Product Price"
							placeholder="Product Price"
							name="price"
							type="number"
							value={form.price}
							onChange={handleChange}
						/>
						<Form.Input
							fluid
							error={
								errors.photoURI
									? { content: "Please enter a photo URL", pointing: "below" }
									: null
							}
							label="Product Photo URL"
							placeholder="Product Photo URL"
							name="photoURI"
							value={form.photoURI}
							onChange={handleChange}
						/>
						<img src={form.photoURI} alt="" />
						<Button type="submit">Submit</Button>
					</Form>
				)}
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	product: state.products.products
});

export default connect(mapStateToProps)(EditProduct);
