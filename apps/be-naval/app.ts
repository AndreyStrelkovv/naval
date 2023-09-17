const express = require("express")
const path = require("path")
const cors = require("cors")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
import testRoutes from "./router/testRouter"
const authRoutes = require("./router/auth")

import User, { IUser } from "./models/user"

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, "public")))

app.use(express.json())

app.use((req: any, res: any, next: Function) => {
  User.findById("643ac3ce99f098869d4866da")
    .then((user) => {
      req.user = user
      next()
    })
    .catch((err: any) => console.log(err))
})

app.use(testRoutes)
app.use(authRoutes)

mongoose
  .connect(
    "mongodb+srv://Andrey:ra4qvyMtVKoaxYOQ@navaldemocluster.iqxrwr0.mongodb.net/test"
  )
  .then((result: any) => {
    app.listen(3000)
    console.log("Connected")
  })
  .catch((err: any) => {
    console.log(err)
  })
