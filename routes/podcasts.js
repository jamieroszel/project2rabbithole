///////////////////////////////
// Import Router
////////////////////////////////
const router = require("express").Router();
const User = require("../models/User");
const Podcast = require("../models/Podcasts");
const auth = require("./authMiddleware");

///////////////////////////////
// Router Specific Middleware
////////////////////////////////
router.use(auth);

///////////////////////////////
// Router Routes
////////////////////////////////
// router.get("/", async (req, res) => {
//   const podcasts = await Podcast.find({ user: req.session.user.id });
//   console.log(podcasts);
//   res.render("podcasts/index", {
//     podcasts,
//   });
// });

// router.post("/", async (req, res) => {
//   req.body.user = req.session.user.id;
//   await Podcast.create(req.body);
//   res.redirect("/podcasts/");
// });

// router.get("/:id", async (req, res) => {
//   const id = req.params.id;
//   const podcast = await Podcast.findOne({ _id: id, user: req.session.user.id });
//   console.log(podcast)
//   if (podcast) {
//     res.render("podcast/show", {
//       podcast,
//     });
//   } else {
//     res.status(400).json({ error: "No Podcast of This ID for this user" });
//   }
// });

// router.put("/:id", async (req, res) => {
//   await Podcast.findByIdAndUpdate(req.params.id, req.body);
//   res.redirect("/podcasts");
// });

// router.delete("/:id", async (req, res) => {
//   await Podcast.findByIdAndRemove(req.params.id);
//   res.redirect("/podcasts");
// });

///////////////////////////////
// Export Router
////////////////////////////////
module.exports = router;