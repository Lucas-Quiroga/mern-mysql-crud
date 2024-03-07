import express from "express";
import cors from "cors";
import "./config.js";
import indexRoutes from "../server/routes/index.routes.js";
import taskRouter from "../server/routes/tasks.routes.js";
import { PORT } from "./config.js";

const app = express();

const corsOptions = {
  origin: "https://mern-mysql.netlify.app",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
  allowedHeaders: "Content-Type, Authorization",
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(indexRoutes);
app.use("/api", taskRouter);
app.listen(PORT);
console.log("Server running on port", PORT);
