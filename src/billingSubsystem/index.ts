import express from "express";

import { createBillPDF } from "./billing.controllers";

const billingRouter = express.Router();

billingRouter.post("/create-bill-pdf", createBillPDF);

export default billingRouter;