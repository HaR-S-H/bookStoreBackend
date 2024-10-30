import express from "express";
import { signUp,logIn } from "../controllers/user.controllers.js";
const router = express.Router();

router.post("/signup", signUp);
router.post("/login",logIn)

export default router;