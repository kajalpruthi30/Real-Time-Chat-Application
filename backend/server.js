import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"

import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"

import connectToMongoDB from "./db/connectToMongoDB.js"

import {app, server} from "./socket/socket.js"

// Getting app from socket
// const app = express()


dotenv.config();
const PORT = process.env.PORT || 5000


// to parse the incoming requests with json payloads (from req.body)
app.use(express.json());
// to parse the incoming cookies from req.cookies
app.use(cookieParser());


app.get('/', (req, res) => {
    // root route - https://localhost:5000/
    res.send('Hello Kajal!')
})


// middlewares
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

// instead of using app of express, use server from socket
server.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server running on port ${PORT}`)
})