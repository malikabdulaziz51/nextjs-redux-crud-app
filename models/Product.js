const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Please add the name"],
		maxlength: [100, "Name cannot be more than 100 character"],
		trim: true
	},
	price: {
		type: String,
		required: [true, "Please add the price"]
	},
	photoURI: {
		type: String,
		required: [true, "Please add the photo URI"]
	}
});

module.exports =
	mongoose.models.Product || mongoose.model("Product", ProductSchema);
