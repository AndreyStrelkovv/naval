import User from "../models/UserModal"
require("dotenv").config()
const jwt = require("jsonwebtoken")

export const userVerification = async (req: any, res: any, next: Function) => {
  const token = req.cookies.token
  if (!token) {
    return res.json({ status: false })
  }
  jwt.verify(token, process.env.TOKEN_KEY, async (err: any, data: any) => {
    if (err) {
      return res.json({ status: false })
    } else {
      const user = await User.findById(data.id)
      if (user) return res.json({ status: true, user: user.username })
      else return res.json({ status: false })
    }
  })
}
