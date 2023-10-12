const mongoose = require("mongoose")
const { Schema } = mongoose

const userSchema = new Schema({
  googleID: String
})

// THIS line creates the collection
mongoose.model("users", userSchema)
