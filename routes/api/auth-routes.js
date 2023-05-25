// const express = require("express");

// const authControllers = require("../../controllers/auth-controllers");

// const { schemas } = require("../../models/order");

// const { validateBody } = require("../../utils");

// const { authenticate, upload } = require("../../middleware");

// const router = express.Router();

// // ! signup
// router.post(
// 	"/register",
// 	validateBody(schemas.userRegisterSchema),
// 	authControllers.register
// );

// // ! sign in
// router.post(
// 	"/login",
// 	validateBody(schemas.userLoginSchema),
// 	authControllers.login
// );

// router.get("/current", authenticate, authControllers.getCurrent);

// router.post("/logout", authenticate, authControllers.logout);

// router.post(
// 	"/cart",
// 	authenticate,
// 	validateBody(schemas.initialCart),
// 	authControllers.userOrderInit
// );

// router.post(
// 	"/order",
// 	authenticate,
// 	validateBody(schemas.userOrderSchema),
// 	authControllers.userOrderCreate
// );



// module.exports = router;
