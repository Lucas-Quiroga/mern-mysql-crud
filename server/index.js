import express from "express";
import cors from "cors";
import "./config.js";
import indexRoutes from "../server/routes/index.routes.js";
import taskRouter from "../server/routes/tasks.routes.js";
import { PORT } from "./config.js";

const app = express();

app.use(cors());

app.use(express.json());

app.use(indexRoutes);
app.use("/api", taskRouter);
app.listen(PORT);
console.log("Server running on port", PORT);
