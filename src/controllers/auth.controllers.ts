import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { Request, Response } from "express";
import prisma from "../db/connector.db";

const JWT_SECRET = process.env.JWT_SECRET;

export async function registerUser(req: Request, res: Response) {
    try {
        const { name, email, password } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
            },
        });

        res.status(201).json({ user });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};