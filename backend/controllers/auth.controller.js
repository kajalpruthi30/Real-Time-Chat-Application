import User from "../models/user.model.js"
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {
    try{
        const {fullName, username, password, confirmPassword, gender} = req.body

        // Case1: If passwords do not match
        if(password !== confirmPassword){
            return res.status(400).json({error: "Passwords do not match"})
        }

        // Case2: username already exists
        const user = await User.findOne({username});
        if(user){
            return res.status(400).json({error: "User already exists"})
        }

        // HASH PASSWORD HERE!
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`

        // Creating new model for storing data into database
        const newUser = new User({
            fullName,
            username,
            password: hashedPassword,
            gender,
            profilePic: gender === 'male' ? boyProfilePic : girlProfilePic
        })

        if(newUser){

            // Generate JWT token
            generateTokenAndSetCookie(newUser._id, res)

            // save it to the database
            await newUser.save()

            // Response to be displayed on postman
            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                profilePic: newUser.profilePic
            })
        }

        else{
            res.status(400).json({error: "Invalid User Data"})
        }
    } catch(error){
        console.log("Error in signup controller", error.message)
        res.status(500).json({error: "Internal Server Error"})
    }
}

export const login = async (req, res) => {
    try{
        const {username, password} = req.body
        const user = await User.findOne({username});
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");
        if(!user || !isPasswordCorrect){
            return res.status(400).json({error: "Invalid Credentials"})
        }

         // Generate JWT token
         generateTokenAndSetCookie(user._id, res)

         // Response to be displayed on postman
         res.status(201).json({
             _id: user._id,
             fullName: user.fullName,
             username: user.username,
             profilePic: user.profilePic
         })
 
    } catch(error){
        console.log("Error in login controller", error.message)
        res.status(500).json({error: "Internal Server Error"})
    }
}

export const logout = async (req, res) =>{
    try{
        res.cookie("jwt", "", {maxAge: 0})
        res.status(200).json({message: "Logged out successfully"})
    } catch(error){
        console.log("Error in logout controller", error.message)
        res.status(500).json({error: "Internal Server Error"})
    }
   
}