import { Server } from "socket.io";
import http from "http";
import express from "express"

const app = express()

const server = http.createServer(app);
const io = new Server(server, {
    cors:{
        origin:["http://localhost:3000"],
        methods:["GET", "POST"]
    }
})

// This object is used to map user IDs to their corresponding socket IDs
const userSocketMap = {};   //{userId: socketId}


        // REAL TIME MESSAGES - just to send the receiver's socket id
export const getReceiverSocketId = (receiverId) => {
    return userSocketMap[receiverId]
}



// here socket is the connected user
io.on('connection', (socket) => {
    console.log("User Connected", socket.id)

    // userId is the id of the authenticated user used in socketContext
    const userId = socket.handshake.query.userId
    if(userId != "undefined") userSocketMap[userId] = socket.id


                        //ONLINE USERS

    // io.emit() is used to send events to all the connected clients
    io.emit("getOnlineUsers", Object.keys(userSocketMap));

    // socket.on is used to listen to the events, can be used both on client and server side
    socket.on("disconnect", () => {
        console.log("User Disconnected", socket.id)
        delete userSocketMap[userId] 
        io.emit("getOnlineUsers", Object.keys(userSocketMap));
    })
})

export {app, io, server}