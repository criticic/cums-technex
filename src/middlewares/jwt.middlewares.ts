import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

import prisma from "../db/connector.db";

const JWT_SECRET: string = process.env.JWT_SECRET || "topsecret";

interface CustomRequest extends Request {
    user?: any;
}

async function isAuth(req: Request, res: Response, next: NextFunction) {
    const token: string = req.headers.authorization
        ? req.headers.authorization.split(" ")[1]
        : "";

    if (!token) {
        return res.status(401).json({ error: "Unauthorized" });
    }

    try {
        const decoded: any = jwt.verify(token, JWT_SECRET);
        const user = await prisma.user.findUnique({
            where: {
                id: decoded.userId,
            },
        });

        if (!user) {
            return res.status(401).json({ error: "Unauthorized" });
        }

        (req as CustomRequest).user = user;
        next();
    } catch (error: any) {
        return res.status(401).json({ error: "Unauthorized" });
    }
}

async function isAdmin(req: Request, res: Response, next: NextFunction) {
    const user = (req as CustomRequest).user;

    if (user.role !== "ADMIN") {
        return res.status(403).json({ error: "Forbidden" });
    }

    next();
}

export { isAuth, isAdmin };