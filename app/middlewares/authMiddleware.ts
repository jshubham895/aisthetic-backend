import { RequestHandler } from "express";
import firebase from "../../firebase";

const validateToken: RequestHandler = async (req, res, next) => {
	const accessToken = req.headers.authorization?.toString().slice(7);

	if (!accessToken)
		return res.status(400).json({ error: "Access Token Missing" });

	try {
		await firebase.auth().verifyIdToken(accessToken);
		next();
	} catch (error) {
		return res.status(400).json({ error: "Authentication failed" });
	}
};

export default validateToken;
