import { Request, Response } from "express";
import jsPDF from "jspdf";

export const createBillPDF = (req: Request, res: Response) => {
    const doc = new jsPDF();
    doc.text("Example Bill", 10, 10);
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=bill.pdf");
    res.send(doc.output("arraybuffer"));
};