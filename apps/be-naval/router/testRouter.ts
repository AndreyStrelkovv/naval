import express from "express"

const router = express.Router()

import TestModal from "../models/testModal"

router.get("/get-test-modal", async (req, res) => {
  try {
    const testModal = await TestModal.find()
    if (!testModal) throw new Error("No TestModal found")
    res.status(200).json(testModal)
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
})

export default router
