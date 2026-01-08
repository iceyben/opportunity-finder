import express from "express";
import cors from "cors";
import { env } from "./config/env";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./config/swagger";

const app = express();

app.use(cors());
app.use(express.json());

// Swagger Docs
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Health check
app.get("/", (_req, res) => {
  res.json({ message: "API is running 🚀" });
});

export default app;
