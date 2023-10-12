const express = require("express")
const mongoose = require("mongoose")
const { mongoURI } = require("./config/keys")
require("./models/User")
require("./services/passport")

mongoose.connect(mongoURI)

const app = express()
require("./routes/authRoutes")(app)

const PORT = process.env.PORT || 5001
app.listen(PORT)
