import { Schema, model } from "mongoose";
const storeSchema = new Schema(
	{
		name: {
			type: String,
			required: true
		},
		phone: {
			type: String,
			required: true
		},
		email: {
			type: String,
			required: true,
			unique: true
		},
		description: {
			type: String,
			required: true
		}
	},
	{
		timestamps: true
	}
);

const Store = model("Store", storeSchema);

export default Store;
