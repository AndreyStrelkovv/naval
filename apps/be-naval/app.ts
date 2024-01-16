const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()
require("dotenv").config()
const cookieParser = require("cookie-parser")
// const path = require("path")
// const bodyParser = require("body-parser")
import testRoutes from "./routes/testRouter"
import authRoute from "./routes/authRoute"
const { MONGODB_URL, BE_NAVAL_APP_PORT } = process.env

// import User, { IUser } from "./models/user"

mongoose
  .connect(MONGODB_URL, {
    useNewUrlParser: true, // Mongoose will use the new URL parser to parse MongoDB connection strings
    useUnifiedTopology: true, // Mongoose will use the new Server Discovery and Monitoring engine
  })
  .then(() => {
    console.log("MongoDB is  connected successfully")
  })
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

// app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use("/", authRoute)
app.use(testRoutes)
// app.use(bodyParser.json())
// app.use(express.static(path.join(__dirname, "public")))

// app.use((req: any, res: any, next: Function) => {
//   console.log("HERE")
//   User.findById("643ac3ce99f098869d4866da")
//     .then((user) => {
//       req.user = user
//       next()
//     })
//     .catch((err: any) => console.log(err))
// })
