import express from "express";
import {getMessages, sendMessage} from "../controllers/message.controller.js"
import protectRoute from "../middlewares/protectRoute.js";

const router = express.Router()

router.get("/get/:id", protectRoute, getMessages)

// protectRoute - only authenticated users can send message
// receiverId
router.post("/send/:id", protectRoute, sendMessage)

export default router;