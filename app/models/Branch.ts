import { Schema, model } from "mongoose";
const branchSchema = new Schema(
	{
		branchName: {
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
		imageUrl: { type: String },
		description: {
			type: String
		},
		address: {
			street: { type: String, required: true },
			state: { type: String, required: true },
			country: { type: String, required: true }
		},
		timings: {
			monday: {
				open: String,
				close: String,
				closed: Boolean
			},
			tuesday: {
				open: String,
				close: String,
				closed: Boolean
			},
			wednesday: {
				open: String,
				close: String,
				closed: Boolean
			},
			thursday: {
				open: String,
				close: String,
				closed: Boolean
			},
			friday: {
				open: String,
				close: String,
				closed: Boolean
			},
			saturday: {
				open: String,
				close: String,
				closed: Boolean
			},
			sunday: {
				open: String,
				close: String,
				closed: Boolean
			}
		},
		store: {
			type: Schema.Types.ObjectId,
			ref: "Store"
		}
	},
	{
		timestamps: true
	}
);

const Branch = model("Branch", branchSchema);

export default Branch;
