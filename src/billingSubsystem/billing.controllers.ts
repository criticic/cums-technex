import { Request, Response } from "express";
import jsPDF from "jspdf";

export const createBillPDF = async (req: Request, res: Response) => {
    const doc = new jsPDF();
    doc.text("Example Bill", 10, 10);
    doc.text("This is a test bill", 10, 20);
    
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=bill.pdf");
    
    const pdfOutput = doc.output("arraybuffer");
    res.setHeader("Content-Length", pdfOutput.byteLength.toString());
    
    res.send(pdfOutput);
};