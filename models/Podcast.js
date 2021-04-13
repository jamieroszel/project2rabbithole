// Import Schema and Model
const { Schema, model } = require("../db/connection.js")

// The Podcast Schema
const PodcastSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: "User"},
    Discipline: { type: String, required: true },
    URL: { type: String, required: true },
    Show: { type: String, required: true },
    Episode: { type: Integer},
    Title: { type: String},
  },
  { timestamps: true }
)

// The User Model
const Podcast = model("Podcast", PodcastSchema)

// Export the User Model
module.exports = Podcast;