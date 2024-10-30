import User from "../models/user.models.js";
import bcryptjs from "bcryptjs";
const signUp = async(req, res) => {
    try {
        const { fullname, email, password } =  req.body;
        const user = await User.findOne({ email })
        if (user) {
            return res.status(400).json({message:"user already exist"})
        }
        const hashPassword = await bcryptjs.hash(password, 10);
        const newUser = new User({
            fullname,
            email,
            password:hashPassword
        })
       await newUser.save();
        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        console.log("error",error);
        
    }
}





const logIn = async(req,res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user)
        {
            return res.status(400).json({ message: "user doesn't exists" });
        }
        const isMatch = await bcryptjs.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid username or password" });
        }
        else {
            res.status(200).json({
                message: "Login Successful", user: {
                    _id:user._id,
                    fullname: user.fullname,
                    email: user.email,
                    
            }})
        }
    } catch (error) {
     console.log(error);
        
    }
}

export { signUp, logIn };