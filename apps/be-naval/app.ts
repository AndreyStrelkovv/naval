const express = require("express")
const path = require("path")
const cors = require("cors")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
import TestModal from "./models/testModal"

// const mongoConnect = require("./util/database").mongoConnect
const testRoutes = require("./router/testRouter")

// const User = require("./models/user")

import User, { IUser } from "./models/user"

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, "public")))
app.use(express.json())
app.use(
  express.urlencoded({
    extended: true,
  })
)

// app.use((req: any, res: any, next: Function) => {
// User.findById("643ac3ce99f098869d4866da")
//   .then((user: IUser) => {
//     req.user = user
//     next()
//   })
//   .catch((err: any) => console.log(err))
// })

app.use(testRoutes)

mongoose
  .connect(
    "mongodb+srv://Andrey:ra4qvyMtVKoaxYOQ@navaldemocluster.iqxrwr0.mongodb.net/test"
  )
  .then((result: any) => {
    app.listen(3000)
  })
  .catch((err: any) => {
    console.log(err)
  })
