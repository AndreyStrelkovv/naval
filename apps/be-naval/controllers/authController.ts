import User from "../models/UserModal"
const { createSecretToken } = require("../util/SecretToken")
const bcrypt = require("bcryptjs")

export const Signup = async (req: any, res: any, next: Function) => {
  try {
    const { email, password, username, createdAt } = req.body
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.json({ message: "User already exists" })
    }
    const user = await User.create({ email, password, username, createdAt })
    const token = createSecretToken(user._id)
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    })
    res
      .status(201)
      .json({ message: "User signed in successfully", success: true, user })
    next()
  } catch (error) {
    console.error(error)
  }
}