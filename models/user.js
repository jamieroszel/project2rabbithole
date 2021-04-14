// Import Schema and Model
const { Schema, model } = require("../db/connection.js")

// The podcast Schema
const Podcast = new Schema({
  discipline: { type: String, unique: true, required: true },
  topic: { type: String, unique: true, required: true },
  showURL: { type: String, unique: true, required: true },
  showTitle: { type: String, unique: true, required: true },
  episodeNumber: { type: String, unique: true, required: true },
  episodeTitle: { type: String, unique: true, required: true }
})

// The User Schema
const UserSchema = new Schema(
  {
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    // The podcast property defined as an array of objects that match the Podcast schema
    podcasts: [Podcast],
  },
  { timestamps: true }
)

// The User Model
const User = model("User", UserSchema)

// Export the User Model
module.exports = User;