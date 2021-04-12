///////////////////////////////
// Import Router
////////////////////////////////
const router = require("express").Router()
const AuthRouter = require("./AuthRouter")

///////////////////////////////
// Router Specific Middleware
////////////////////////////////
router.use("/auth", AuthRouter)

///////////////////////////////
// Router Routes
////////////////////////////////
router.get("/", (req, res) => {
    res.render("home")
})

router.get("/about", (req, res) => {
    res.render("about")
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
router.get("/env", (req, res) => {
    res.render("env")
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

///////////////////////////////
// Export Router
////////////////////////////////
module.exports = router