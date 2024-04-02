import express from "express";
import {getMessages, sendMessage, getLastMessages} from "../controllers/message.controller.js"
import protectRoute from "../middlewares/protectRoute.js";

const router = express.Router()

router.get("/get/:id", protectRoute, getMessages)

// protectRoute - only authenticated users can send message
// receiverId
router.post("/send/:id", protectRoute, sendMessage)


// get last messages of a sender with all the users
router.get("/getLastMessages", protectRoute, getLastMessages)


export default router;