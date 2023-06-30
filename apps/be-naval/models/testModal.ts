const mongoose = require("mongoose")

const Schema = mongoose.Schema

class testModalSchema extends mongoose.Schema {
  constructor() {
    super({
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
    })
  }
}

export default mongoose.model("Modal", new testModalSchema())
// module.exports = mongoose.model("TestModal", testModalSchema)

// const mongodb = require("mongodb")
// const getDb = require("../util/database").getDb

// const ObjectId = mongodb.ObjectId

// export class TestModal {
//   title: string
//   description: string
//   _id: typeof ObjectId
//   constructor(title: string, description: string, id: string) {
//     this.title = title
//     this.description = description
//     this._id = id ? new ObjectId(id) : undefined
//   }

//   save() {
//     const db = getDb()
//     let dbOp

//     if (this._id) {
//       // update existing product
//       dbOp = db
//         .collection("modals")
//         .updateOne({ _id: this._id }, { $set: this })
//     } else {
//       // insert new product
//       dbOp = db.collection("modals").insertOne(this)
//     }
//     return dbOp
//       .then((result: any) => {
//         console.log(result)
//       })
//       .catch((err: any) => console.log(err))
//   }

//   static fetchAll() {
//     const db = getDb()
//     return db
//       .collection("modals")
//       .find()
//       .toArray()
//       .then((products: any) => {
//         return products
//       })
//       .catch((err: any) => console.log(err))
//   }

// }
