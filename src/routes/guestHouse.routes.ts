import express from "express";

import { createGuestHouse, deleteGuestHouse, getAllGuestHouses, getGuestHouse, updateGuestHouse } from "../controllers/guestHouse.controllers";
import { addRoom, updateRoom, deleteRoom, userBookRoom } from "../controllers/guestHouse.controllers";

import { isAuth, isAdmin } from "../middlewares/jwt.middlewares";

const router = express.Router();
router.get("/", isAuth, getAllGuestHouses);
router.get("/:id", isAuth, getGuestHouse);
router.post("/", isAuth, isAdmin, createGuestHouse);
router.put("/:id", isAuth, isAdmin, updateGuestHouse);
router.delete("/:id", isAuth, isAdmin, deleteGuestHouse);

router.post("/add-room", isAuth, isAdmin, addRoom);
router.put("/update-room/:id", isAuth, isAdmin, updateRoom);
router.delete("/delete-room/:id", isAuth, isAdmin, deleteRoom);

router.post("/book-room", isAuth, userBookRoom);

export default router;