import express from "express"

const router = express.Router()

import TestModal from "../models/testModal"

router.post("/login", async (req, res) => {
  res.setHeader("Set-Cookie", "loggedIn=true")
  res.status(200).json({})
})

module.exports = router
