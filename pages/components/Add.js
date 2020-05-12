import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Button, Form, Loader } from "semantic-ui-react";
import { useRouter } from "next/router";
import { postProduct } from "../../redux/reducers/globalActions";

const AddProduct = () => {
	const [form, setForm] = useState({ name: "", price: "", photoURI: "" });
	const [isSubmit, setIsSubmit] = useState(false);
	const [errors, setErrors] = useState({});
	const router = useRouter();

	const dispatch = useDispatch();

	useEffect(() => {
		if (isSubmit) {
			if (Object.keys(errors).length === 0) {
				dispatch(postProduct(form, router));
			} else {
				setIsSubmit(false);
			}
		}
	}, [errors]);

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
			<h1>Create Product</h1>
			<div>
				{isSubmit ? (
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
							onChange={handleChange}
						/>
						<Button type="submit">Create</Button>
					</Form>
				)}
			</div>
		</div>
	);
};

export default AddProduct;
