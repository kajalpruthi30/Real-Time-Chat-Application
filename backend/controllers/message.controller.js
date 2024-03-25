import Conversation from "../models/conversation.model.js"
import Message from "../models/message.model.js"

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
            conversation = await Conversation.create({
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