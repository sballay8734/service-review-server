const express = require("express")
require("./passportTest")

const app = express()
require("./authRoutesTest")(app)

app.listen(5000)
