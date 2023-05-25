const { Schema, model } = require("mongoose");

const { handleMongooseError } = require("../utils");
// const Joi = require("joi");

const shopSchema = new Schema(
	{
		_id: {
			type: Object
		},
		shopName: {
			type: String,
			required: [true, "Set name for shop"],
		},
		shopFood: {
			type: Array,
		},
		
		// owner: {
		// 	type: Schema.Types.ObjectId,
		// 	ref: "user",
			
		// },
	},
	{ versionKey: false, timestamps: true }
);

shopSchema.post("save", handleMongooseError);

// const contactAddSchema = Joi.object({
// 	name: Joi.string().required().messages({
// 		"any.required": `missing required "name" field`,
// 	}),
// 	email: Joi.string().required().messages({
// 		"any.required": `missing required "email" field`,
// 	}),
// 	phone: Joi.string().required().messages({
// 		"any.required": `missing required "phone" field`,
// 	}),
// 	favorite: Joi.boolean(),
// });

// const contactUpdateFavoriteSchema = Joi.object({
// 	favorite: Joi.boolean().required().messages({
// 		"any.required": `missing field favorite`,
// 	}),
// });

// const schemas = {
// 	contactAddSchema,
// 	contactUpdateFavoriteSchema,
// };

const Shop = model("shop", shopSchema);

module.exports = {
	Shop,
	// schemas,
};
