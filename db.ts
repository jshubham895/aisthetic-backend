import mongoose, { Connection } from "mongoose";
import dotenv from "dotenv";
dotenv.config();

class DBService {
	connection: Connection | null;

	constructor() {
		this.connection = null;
	}

	async connect() {
		try {
			await mongoose.connect(process.env.MONGODB_URL as string);
			this.connection = mongoose.connection;
			console.log("MongoDB Connection has been established successfully.");
		} catch (err) {
			console.error("Unable to connect to the database.", err);
			throw err;
		}
	}

	async init() {
		try {
			if (!this.connection) await this.connect();
			console.log("DBService initialized successfully.");
		} catch (err) {
			console.log("Error while initializing database.", err);
			throw err;
		}
	}

	closeConnection() {
		try {
			if (this.connection) {
				this.connection.close();
				console.log("MongoDB Connection has been closed successfully.");
			}
		} catch (err) {
			console.log("Error while closing the db connection.", err);
			process.exit(1);
		}
	}
}
const dbService = new DBService();

export default dbService;
