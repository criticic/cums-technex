import jwt from "jsonwebtoken";

import { Request, Response } from "express";
import prisma from "../db/connector.db";

const JWT_SECRET: string = process.env.JWT_SECRET || "topsecret";

export async function registerUser(req: Request, res: Response) {
    try {
        const { name, email, password, role } = req.body;

        const hashedPassword = await Bun.password.hash(password);

        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                role,
            },
        });

        console.log(user);

        const token: string = jwt.sign({ userId: user.id }, JWT_SECRET);
        console.log(token);

        res.status(201).json({
            token,
            user,
        });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export async function loginUser(req: Request, res: Response) {
    try {
        const { email, password } = req.body;

        const user = await prisma.user.findUnique({
            where: {
                email,
            },
        });

        if (!user) {
            return res.status(400).json({ error: "Invalid email or password" });
        }

        const passwordMatch = await Bun.password.verify(password, user.password);

        if (!passwordMatch) {
            return res.status(400).json({ error: "Invalid email or password" });
        }

        const token = jwt.sign({ userId: user.id }, JWT_SECRET);

        res.status(200).json({
            token,
            user,
        });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};