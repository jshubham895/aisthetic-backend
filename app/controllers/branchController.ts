import { RequestHandler } from "express";
import Store from "../models/Store";
import Branch from "../models/Branch";

export const getStoreName: RequestHandler = async (req, res) => {
	try {
		const store = await Store.find();
		return res.status(200).json(store[0].name);
	} catch (err) {
		console.log("Error in getStoreName", err);
		if (err instanceof Error) {
			return res.status(400).json(err.message);
		}
		return res.status(400).json("Error while getting store name.");
	}
};

export const getStoreDetails: RequestHandler = async (req, res) => {
	try {
		const store = await Store.find();
		return res.status(200).json(store[0]);
	} catch (err) {
		console.log("Error in getStoreDetails", err);
		if (err instanceof Error) {
			return res.status(400).json(err.message);
		}
		return res.status(400).json("Error while getting store details.");
	}
};

export const getBranches: RequestHandler = async (req, res) => {
	try {
		const { id } = req.params;

		const branches = id ? await Branch.findById(id) : await Branch.find();
		return res.status(200).json(branches);
	} catch (err) {
		console.log("Error in getBranches", err);
		if (err instanceof Error) {
			return res.status(400).json(err.message);
		}
		return res.status(400).json("Error while getting store branches.");
	}
};
