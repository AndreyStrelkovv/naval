const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const path = require("path")
const bodyParser = require("body-parser")
require("dotenv").config()

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
  .connect(process.env.MONGODB_URL)
  .then((result: any) => {
    app.listen(3000)
    console.log("Connected")
  })
  .catch((err: any) => {
    console.log(err)
  })
