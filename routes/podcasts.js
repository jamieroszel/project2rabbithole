///////////////////////////////
// Import Router
////////////////////////////////
const router = require("express").Router();
const User = require("../models/User");
const auth = require("./authMiddleware");

///////////////////////////////
// Router Specific Middleware
////////////////////////////////
router.use(auth);
router.use(async (req, res, next) => {
  req.user = await User.findById(req.session.user.id);
  next();
});

///////////////////////////////
// Router Routes
////////////////////////////////
// See all the podcasts
router.get("/", async (req, res) => {
  const user = req.user;
  const podcasts = user.podcasts;
  res.render("/podcastsindex", {
    podcasts,
  });
});

// Enter a new podcast
router.post("/", async (req, res) => {
  const user = req.user;
  user.podcasts.push(req.body);
  user.save();
  res.redirect("/podcastsindex/");
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const index = req.user.podcasts.findIndex((podcast) => `${podcast._id}` === id);
  const podcast = req.user.podcasts[index];
  console.log(podcast);
  res.render("podcasts/show", {
    podcast,
  });
});

router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const index = req.user.podcasts.findIndex((podcast) => `${podcast._id}` === id);
  req.user.podcasts[index].text = req.body.text;
  req.user.save();
  res.redirect("/podcastsindex");
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const index = req.user.podcasts.findIndex((podcast) => `${podcast._id}` === id);
  req.user.podcasts.splice(index, 1);
  req.user.save();
  res.redirect("/podcasts");
});
///////////////////////////////
// Export Router
////////////////////////////////
module.exports = router;