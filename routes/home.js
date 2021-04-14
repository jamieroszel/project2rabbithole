///////////////////////////////
// Import Router
////////////////////////////////
const router = require("express").Router()
const AuthRouter = require("./AuthRouter")
const PodcastsRouter = require("./podcasts")
///////////////////////////////
// Router Specific Middleware
////////////////////////////////
router.use("/auth", AuthRouter)
router.use("/podcasts", PodcastsRouter)
///////////////////////////////
// Router Routes
////////////////////////////////
// Home
router.get("/", (req, res) => {
    res.render("home")
})

// About
router.get("/about", (req, res) => {
    res.render("about")
})
// Contribute
router.get("/contribute", (req, res) => {
    res.render("contribute")
})

// Create Router
router.get("/podcasts/create", (req, res) => {
    res.render('create');
})


// Dunning Kruger Route
router.get("/ss/dk", (req, res) => {
    res.render("dk")
})

// Login Get Route
router.get("/auth/login", (req, res) => {
    res.render("auth/login")
})

// Signup Get Route
router.get("/auth/create", (req, res) => {
    res.render("auth/create")
})

// Environment Router
router.get("/enviro", (req, res) => {
    res.render("enviro")
})

// Timber Wars Router
router.get("/timberwars", (req, res) => {
    res.render("timberwars")
})

// Podcasts Index Router
router.get("/podcastsindex", (req, res) => {
    res.render('podcastsindex');
})

// Politics Router
router.get("/pol", (req, res) => {
    res.render("pol")
})
// History Router
router.get("/hist", (req, res) => {
    res.render("hist")
})
// Science Router
router.get("/sci", (req, res) => {
    res.render("sci")
})

// Social Sciences Router
router.get("/ss", (req, res) => {
    res.render("ss")
})

// Sex & Gender Router
router.get("/sg", (req, res) => {
    res.render("sg")
})

// Design Router
router.get("/des", (req, res) => {
    res.render("des")
})

// Arts & Literature Router
router.get("/artslit", (req, res) => {
    res.render("artslit")
})

// Film & Television Router
router.get("/filmtv", (req, res) => {
    res.render("filmtv")
})

// Music Router
router.get("/music", (req, res) => {
    res.render("music")
})

// Sports Router
router.get("/sports", (req, res) => {
    res.render("sports")
})

// Technology Router
router.get("/tech", (req, res) => {
    res.render("tech")
})

router.get("/podcasts", (req, res) => {
    res.render("podcasts")
})

// 404 Router
router.use((req, res) => {
    res.status(404).render('404')
})

///////////////////////////////
// Export Router
////////////////////////////////
module.exports = router