import express from "express";
import cors from "cors";
import { PORT } from "./config.js";
import indexRoutes from "../server/routes/index.routes.js";
import taskRouter from "../server/routes/tasks.routes.js";

const app = express();

app.use(cors());

app.use(express.json());

app.use(indexRoutes);
app.use(taskRouter);
app.listen(PORT);

console.log("Server is running on port", PORT);
