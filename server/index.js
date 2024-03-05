import express from "express";
import cors from "cors";
import "./config.js";
import indexRoutes from "../server/routes/index.routes.js";
import taskRouter from "../server/routes/tasks.routes.js";

const app = express();

app.use(cors());

app.use(express.json());

app.use(indexRoutes);
app.use(taskRouter);
app.listen(process.env.PORT || 4000);

console.log("Server is running on port", process.env.PORT || 4000);
