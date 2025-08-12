import express, { Application } from "express";
import { env } from "./config/config.js";
import cors from "cors";

const app: Application = express();

// Import Middlewares
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
const options = {
  origin: env.FRONTEND_ORIGIN,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
};
app.use(cors(options));

// Import Routes
import tokenRouter from "./routes/token.route.js";
app.use("/api/v1", tokenRouter);

export default app;
