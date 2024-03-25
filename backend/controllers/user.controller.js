import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) =>{
    try{  
        const loggedInUserId = req.user._id;
        // find all the users in the database but excluding the one which is not equal to loggedIn UserId
        const allUsers = await User.find({_id: { $ne: loggedInUserId}}).select("-password");

        res.status(200).json({allUsers});
    }   
    catch(error){
        console.log("Error in getUsersForSidebar controller: ", error.message)
        res.status(500).json({error: "Internal server error"});
    }
}