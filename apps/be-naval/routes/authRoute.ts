import { Signup, Login } from "../controllers/authController"
import { userVerification } from "../middlewares/authMiddleware"
import express from "express"
const router = express.Router()

router.post("/signup", Signup)
router.post("/login", Login)
router.post("/", userVerification)

export default router
