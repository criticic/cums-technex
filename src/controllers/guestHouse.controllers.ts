import { Request, Response } from "express";
import prisma from "../db/connector.db";

export async function getAllGuestHouses(req: Request, res: Response) {
    try {
        const guestHouses = await prisma.guestHouse.findMany();
        res.status(200).json(guestHouses);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export async function getGuestHouse(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const guestHouse = await prisma.guestHouse.findUnique({
            where: {
                id: parseInt(id),
            },
        });
        if (!guestHouse) {
            return res.status(404).json({ error: "Guest house not found" });
        }
        res.status(200).json(guestHouse);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export async function createGuestHouse(req: Request, res: Response) {
    try {
        const { name, location, description } = req.body;
        const guestHouse = await prisma.guestHouse.create({
            data: {
                name,
                location,
                description,
            },
        });
        res.status(201).json(guestHouse);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export async function updateGuestHouse(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const { name, location, description } = req.body;
        const guestHouse = await prisma.guestHouse.update({
            where: {
                id: parseInt(id),
            },
            data: {
                name,
                location,
                description,
            },
        });
        res.status(200).json(guestHouse);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export async function deleteGuestHouse(req: Request, res: Response) {
    try {
        const { id } = req.params;
        await prisma.guestHouse.delete({
            where: {
                id: parseInt(id),
            },
        });
        res.status(204).end();
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export async function addRoom(req: Request, res: Response) {
    try {
        const { guestHouseId, roomNo, roomType, description } = req.body;
        const room = await prisma.room.create({
            data: {
                guestHouseId: parseInt(guestHouseId),
                roomType,
                description,
                roomNo
            },
        });
        res.status(201).json(room);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}

export async function updateRoom(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const { roomNo, roomType, description } = req.body;
        const room = await prisma.room.update({
            where: {
                id: parseInt(id),
            },
            data: {
                roomType,
                description,
                roomNo
            },
        });
        res.status(200).json(room);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}

export async function deleteRoom(req: Request, res: Response) {
    try {
        const { id } = req.params;
        await prisma.room.delete({
            where: {
                id: parseInt(id),
            },
        });
        res.status(204).end();
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}

export async function userBookRoom(req: Request, res: Response) {
    try {
        const { roomId, userId, checkIn, checkOut } = req.body;
        const booking = await prisma.booking.create({
            data: {
                roomId: parseInt(roomId),
                userId: parseInt(userId),
                checkIn,
                checkOut
            },
        });
        res.status(201).json(booking);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}