import express from "express";
import cors from "cors"

import authRoutes from "./src/routes/auth.routes";
import { connectDatabase } from "./src/db/connector.db";

const app = express();
app.use(cors());

app.use("/auth", authRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
  connectDatabase();
});