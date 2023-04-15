import { ObjectId } from "mongodb"
// const getDb = require("../util/database")
import { getDb } from "../util/database"

// const ObjectId = mongodb.ObjectId

export interface IUser {
  name: string
  email: string
}

export class User implements IUser {
  name: string
  email: string

  constructor(username: string, email: string) {
    this.name = username
    this.email = email
  }

  save() {
    const db = getDb()
    return db.collection("users").insertOne(this)
  }

  static findById(userId: string) {
    const db = getDb()
    return db.collection("users").findOne({ _id: new ObjectId(userId) })
  }
}

// module.exports = User
