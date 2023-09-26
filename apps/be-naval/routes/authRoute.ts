import { Signup } from "../controllers/authController"
import express from "express"
const router = express.Router()

router.post("/signup", Signup)

export default router
