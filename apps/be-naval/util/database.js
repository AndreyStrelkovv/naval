const mongodb = require("mongodb")
const MongoClient = mongodb.MongoClient

// const ObjectId = mongodb.ObjectId

let _db

const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://Andrey:ra4qvyMtVKoaxYOQ@navaldemocluster.iqxrwr0.mongodb.net/test"
    // { useUnifiedTopology: true }
  )
    .then((client) => {
      console.log("Connected!")
      _db = client.db()
      // dbOp = _db.collection("modals").insertOne({
      //   title: "Test",
      //   description: "first modal",
      //   _id: new ObjectId(1),
      // })
      callback()
    })
    .catch((err) => {
      console.log(err)
      throw err
    })
}

const getDb = () => {
  if (_db) {
    return _db
  }
  throw "No database found"
}

exports.mongoConnect = mongoConnect
exports.getDb = getDb
