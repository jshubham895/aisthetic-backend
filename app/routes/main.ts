import { Router } from "express";
import validateToken from "../middlewares/authMiddleware";
import {
	getBranches,
	getStoreDetails,
	getStoreName
} from "../controllers/branchController";

const router = Router();

router.route("/store").get(getStoreName);

router.route("/store-details").get(validateToken, getStoreDetails);

router.route("/branches").get(validateToken, getBranches);

router.route("/branches/:id").get(validateToken, getBranches);

export default router;
