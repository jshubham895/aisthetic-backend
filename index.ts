import express from "express";
import cors from "cors";
import dbService from "./db";
import validationErrorHandler from "./app/middlewares/expressValidation";
import appRoutes from "./app/routes/main";

const app = express();
app.use(cors());

app.use("/", appRoutes);

app.listen(4000, async () => {
	await dbService.init();
	console.log("Server running successfully");
});

app.use(validationErrorHandler);

const exitHandler = async (
	options: { cleanup?: boolean; exit?: boolean },
	exitCode: null | number
) => {
	dbService.closeConnection();
	if (options.cleanup) console.log("clean");
	if (exitCode || exitCode === 0) console.log(exitCode);
	if (options.exit) process.exit();
};

process.on("exit", exitHandler.bind(null, { cleanup: true }));
process.on("SIGINT", exitHandler.bind(null, { exit: true }));
process.on("SIGUSR1", exitHandler.bind(null, { exit: true }));
process.on("SIGUSR2", exitHandler.bind(null, { exit: true }));
process.on("uncaughtException", exitHandler.bind(null, { exit: true }));
