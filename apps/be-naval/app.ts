const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const path = require("path")
const bodyParser = require("body-parser")
require("dotenv").config()
const { MONGODB_URL, BE_NAVAL_APP_PORT } = process.env

import testRoutes from "./routes/testRouter"
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
  .connect(MONGODB_URL, {
    useNewUrlParser: true, // Mongoose will use the new URL parser to parse MongoDB connection strings
    useUnifiedTopology: true, // Mongoose will use the new Server Discovery and Monitoring engine
  })
  .then(() => console.log("MongoDB is  connected successfully"))
  .catch((err: any) => console.error(err))

app.listen(BE_NAVAL_APP_PORT, () => {
  console.log(`Server is listening on port ${BE_NAVAL_APP_PORT}`)
})

app.use(
  cors({
    origin: [`http://localhost:${BE_NAVAL_APP_PORT}`],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
)
//   console.log("Connected")
// .catch((err: any) => {
//   console.log(err)
// })
