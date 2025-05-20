import User from '../models/user.model.js';
import { generateToken } from '../lib/util.js'
import bcrypt from "bcryptjs"


export const signup = async (req,res) => {
    //collect the data
    const {fullName,email,password} = req.body
    try {
        if(!fullName || !email || !password){
            return res.status(400).json({message:"All the fields are required!"})
        }
        const user = await User.findOne({email})
        if (user) return res.status(400).json({message: "Email already exists"})
        //password should be of length 6 or more
        if(password.length < 6){
            return res.status(400).json({ message: "Password must be atleast 6 characters"})
        }
        //check if the user already exists
        //if yes return a message
        //if no then protect the password by hashing it
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)
        const newUser = new User({
            fullName,
            email,
            password:hashedPassword
        })
        if(newUser){
            //generate jwt token
            generateToken(newUser._id,res)
            await newUser.save();
            res.status(201).json({
                _id:newUser._id,
                fullName: newUser.fullName,
                email: newUser.email,
                profilePic: newUser.profilePic,
            })
        }else{
            res.status(400).json({message:"Invalid user data"})
        }
    } catch (error) {
        console.log("Error in signup controller",error.message);
        res.status(500).json({message:"Internal server error"})
    }
}
export const logout = (req,res) => {
    res.send("logout route");
}
export const login = (req,res) => {
    res.send("login route");
}