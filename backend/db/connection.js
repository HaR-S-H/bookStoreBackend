import mongoose from "mongoose";


const connectedDB = async() => {
    try {
        
        console.log(process.env.MONGODB_URL);
        
     await mongoose.connect(process.env.MONGODB_URL);
        
        console.log("db is connected");
    
    } catch (error) {
        console.log(error);
        process.exit(1);
    
    }
}

export default connectedDB;
