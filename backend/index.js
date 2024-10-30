import express from "express";
import dotenv from "dotenv";
import connectedDB from "./db/connection.js"
import bookRoute from "./routes/book.routes.js"
import UserRoute from "./routes/user.routes.js";
import cors from "cors"
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
dotenv.config();
connectedDB();
const port = process.env.PORT;

//defining routes

app.use("/book", bookRoute);
app.use("/user", UserRoute);
app.listen(port, () => {
    console.log(`server is listening a port ${port}`);
    
})