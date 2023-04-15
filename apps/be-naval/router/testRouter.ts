import express from "express"

const router = express.Router()

const TestModal = require("../models/testModal")

router.get("/get-test-modal", async (req, res) => {
  try {
    const testModal = await TestModal.fetchAll()
    if (!testModal) throw new Error("No TestModal found")
    res.status(200).json(testModal)
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
})

module.exports = router
