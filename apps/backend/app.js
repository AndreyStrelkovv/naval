const path = require("path")

const express = require("express")

const mongoConnect = require("./util/database").mongoConnect

const app = express()

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

mongoConnect(() => {
  app.listen(3000)
})
