import express from "express";
import cors from "cors"

import userRouter from "./src/user";
import guestHouseRouter from "./src/guestHouse";

import { connectDatabase } from "./src/db/connector.db";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", userRouter);
app.use("/guest-house", guestHouseRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
  connectDatabase();
});