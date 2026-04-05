import User from "../models/user.js";
import Product from "../models/product.js";

export async function getPublicStats(req, res) {
	try {
		const happyCustomers = await User.countDocuments({
			role: "customer",
		});

		const productsAvailable = await Product.countDocuments({});

		res.status(200).json({
			happyCustomers,
			productsAvailable,
		});
	} catch (error) {
		res.status(500).json({
			message: "Failed to load stats",
			error: error.message,
		});
	}
}