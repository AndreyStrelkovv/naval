const express = require("express")

const router = express.Router()

const TestModal = require("../models/testModal")

// /admin/add-product => GET
router.get("/get-test-modal", async (req, res) => {
  try {
    const testModal = await TestModal.fetchAll()
    if (!testModal) throw new Error("No TestModal found")
    res.status(200).json(testModal)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

module.exports = router
