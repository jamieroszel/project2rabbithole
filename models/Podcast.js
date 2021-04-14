// // Import Schema and Model
// const { Schema, model } = require("../db/connection.js")

// // The Podcast Schema
// const PodcastSchema = new Schema({
//     discipline: { type: String, required: true },
//     topic: {type: String, required: true}, //I don't have any idea how to do this!
//     url: { type: String, required: true },
//     showTitle: { type: String, required: true },
//     episodeNumber: { type: Integer},
//     episodeTitle: { type: String},
//   },
//   { timestamps: true }
// )

// // The Podcast Model
// const Podcast = model("Podcast", PodcastSchema)

// // Export the User Model
// module.exports = Podcast;