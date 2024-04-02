import Conversation from "../models/conversation.model.js"
import Message from "../models/message.model.js"
import { getReceiverSocketId, io } from "../socket/socket.js";

export const sendMessage = async (req, res) =>{
    try{
        const {message} = req.body;
        const {id: receiverId} = req.params;

        // user._id is from protectRoute.js
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants: {$all: [senderId, receiverId]}
        })

        // if a conversation doesn't exist, create one!
        if(!conversation){
            // conversation = await Conversation.create({
            //     participants: [senderId, receiverId],
            // })

            conversation = new Conversation({
                participants: [senderId, receiverId],
            })
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message
        })

        if(newMessage){
            conversation.messages.push(newMessage._id)
        }

        // save conversation and message into database
        // await conversation.save(); - 1
        // await newMessage.save();  - 2

        // Optimization - this will run in parallel
        await Promise.all([conversation.save(), newMessage.save()]);

        // SOCKET FUNCTIONALITY - after saving into database, show to user as well in real time
        const receiverSocketId = getReceiverSocketId(receiverId)
        if(receiverSocketId){
            io.to(receiverSocketId).emit("newMessage", newMessage)
        }

        res.status(201).json(newMessage);

    }
    catch(error){
        console.log("Error in sendMessage controller: ", error.message)
        res.status(500).json({error: "Internal server error"});
    }
}

export const getMessages = async (req, res) => {
    try{
        const {id: receiverId} = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants: {$all: [senderId, receiverId]},
        }).populate("messages");        //Not reference but actual messages


        if(!conversation) return res.status(200).json([])

        res.status(200).json(conversation.messages);

    }
    catch(error){
        console.log("Error in getMessages controller: ", error.message)
        res.status(500).json({error: "Internal server error"});
    }
}


export const getLastMessages = async (req, res) => {
    try{
        const senderId = req.user._id;

        const lastConversations = await Conversation.find({
            participants: { $all: [senderId] }
        }).populate({
            path: 'messages',
            options: { sort: { createdAt: -1 }, limit: 1 }
        })

        const lastMessages = lastConversations.map(conversation => {
            return conversation.messages[0]
        });

        res.status(200).json(lastMessages);
    }
    catch(error){
        console.log("Error in getLastMessages controller: ", error.message)
        res.status(500).json({error: "Internal server error"});
    }
}