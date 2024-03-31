import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const protectRoute = async (req, res, next) => {
    try{
        const token = req.cookies.jwt;
        if(!token){
            return res.status(401).json({error: "Unauthorized - No Token Provided"});
        }   
        
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        if(!decoded){
            return res.status(401).json({error: "Unauthorized - Invalid Token"});
        }

        const user = await User.findById(decoded.userId).select("-password");
        if(!user){
            return res.status(404).json({error: "User not found"});   
        }

        // user on left side can be used in other functions to get the details of that loggedIn user
        req.user = user;

        // next function is called like sendMessage from message.routes.js is called after it
        next();
    }
    catch(error){
        console.log("Error in protectRoute middleware: ", error.message);
        res.status(500).json({error: "Internal Server Error"});
    }
}

export default protectRoute;