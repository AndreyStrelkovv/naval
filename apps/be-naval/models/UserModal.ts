// const mongoose = require("mongoose")
// import bcrypt from "bcryptjs"
const bcrypt = require("bcryptjs")
import mongoose, { Schema, InferSchemaType } from "mongoose"

const userSchema = new Schema({
  email: {
    type: String,
    required: [true, "Your email address is required"],
    unique: true,
  },
  username: {
    type: String,
    required: [true, "Your username is required"],
  },
  password: {
    type: String,
    required: [true, "Your password is required"],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
})

type User = InferSchemaType<typeof userSchema>

userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 12)
})

// module.exports = mongoose.model("User", userSchema)
const UserModel = mongoose.model("User", userSchema)
export default UserModel
