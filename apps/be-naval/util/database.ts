import { MongoClient } from "mongodb"

let _db: any

export const mongoConnect = (callback: Function) => {
  MongoClient.connect(
    "mongodb+srv://Andrey:ra4qvyMtVKoaxYOQ@navaldemocluster.iqxrwr0.mongodb.net/test"
  )
    .then((client) => {
      console.log("Connected!")
      _db = client.db()
      callback()
    })
    .catch((err) => {
      console.log(err)
      throw err
    })
}

export const getDb = () => {
  if (_db) {
    return _db
  }
  throw "No database found"
}
