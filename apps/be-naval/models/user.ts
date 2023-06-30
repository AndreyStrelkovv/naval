import { Schema, model } from "mongoose"
export interface IUser {
  name: string
  email: string
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
})
const User = model("User", userSchema)
export default User

// const getDb = require("../util/database")
// import { getDb } from "../util/database"

// const ObjectId = mongodb.ObjectId

// export interface IUser {
//   name: string
//   email: string
// }

// export class User implements IUser {
//   name: string
//   email: string

//   constructor(username: string, email: string) {
//     this.name = username
//     this.email = email
//   }

// save() {
//   const db = getDb()
//   return db.collection("users").insertOne(this)
// }

// static findById(userId: string) {
//   const db = getDb()
//   return db.collection("users").findOne({ _id: new ObjectId(userId) })
// }
// }

// module.exports = User
