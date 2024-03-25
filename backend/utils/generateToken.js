import jwt from "jsonwebtoken"

const generateTokenAndSetCookie = (userId, res) => {

    // Step1: Creating token
    // userId - payload 
    const token = jwt.sign({userId}, process.env.JWT_SECRET_KEY, {
        expiresIn: '15d'
    })

    // Step2: Sending token along with options
    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000,       //miliseconds
        httpOnly: true,              // prevents XSS attacks - cross-site scripting attacks
        sameSite: "strict",          // CSRF attacks cross-site request forgery attacks
        secure: process.env.NODE_ENV !== "development"      //false for development and true for production
    })
}

export default generateTokenAndSetCookie;