const express = require("express")
const path = require("path")
const cors = require("cors")
const bodyParser = require("body-parser")

const mongoConnect = require("./util/database").mongoConnect
const testRoutes = require("./router/testRouter")

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

app.use((req, res, next) => {
  // User.findById("63d2c09139d591af29af18b4")
  //   .then((user) => {
  //     req.user = user
  //     next()
  //   })
  //   .catch((err) => console.log(err))
  next()
})

app.use(testRoutes)

mongoConnect(() => {
  app.listen(3000)
})
