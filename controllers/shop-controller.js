const { Shop } = require("../models/shops");

const { HttpError } = require("../helpers");

const { controllerWrapper } = require("../utils");

const getAllShops = async (req, res) => {
	// const { _id: owner } = req.user;
	// const { page = 1, limit = 10, favorite } = req.query;

	// const skip = (page - 1) * limit;
	// const query = { owner };

	// if (favorite) {
	// 	query.favorite = favorite === "true";
	// }

	const result = await Shop.find({});

	res.json(result);
};

const getShopFoodById = async (req, res) => {
	const { id } = req.params;
	const result = await Shop.findById(id);

	if (!result) {
		throw HttpError(404, `Shop with id = '${id}' not found`);
	}
	res.json(result);
};



module.exports = {
	getAllShops: controllerWrapper(getAllShops),
	getShopFoodById: controllerWrapper(getShopFoodById),
	
};
