const express = require("express");

const shopController = require("../../controllers/shop-controller");

// const { schemas } = require("../../models/shop");

// const { validateBody } = require("../../utils");

// const { authenticate, isValidId } = require("../../middleware");

const router = express.Router();
// router.use(authenticate);

router.get("/", shopController.getAllShops);

router.get("/:id", shopController.getShopFoodById);

module.exports = router;