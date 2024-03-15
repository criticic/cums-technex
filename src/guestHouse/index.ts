import express from "express";

import { createGuestHouse, deleteGuestHouse, getAllGuestHouses, getGuestHouse, updateGuestHouse } from "./guestHouse.controllers";
import { addRoom, updateRoom, deleteRoom, userBookRoom } from "./guestHouse.controllers";

import { isAuth, isAdmin } from "../middlewares/jwt.middlewares";

const guestHouseRouter = express.Router();
guestHouseRouter.get("/", isAuth, getAllGuestHouses);
guestHouseRouter.get("/:id", isAuth, getGuestHouse);
guestHouseRouter.post("/", isAuth, isAdmin, createGuestHouse);
guestHouseRouter.put("/:id", isAuth, isAdmin, updateGuestHouse);
guestHouseRouter.delete("/:id", isAuth, isAdmin, deleteGuestHouse);

guestHouseRouter.post("/add-room", isAuth, isAdmin, addRoom);
guestHouseRouter.put("/update-room/:id", isAuth, isAdmin, updateRoom);
guestHouseRouter.delete("/delete-room/:id", isAuth, isAdmin, deleteRoom);

guestHouseRouter.post("/book-room", isAuth, userBookRoom);

export default guestHouseRouter;