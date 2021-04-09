///////////////////////////////
// Import Router
////////////////////////////////
const router = require("express").Router()

///////////////////////////////
// Router Specific Middleware
////////////////////////////////

///////////////////////////////
// Router Routes
////////////////////////////////
router.get("/", (req, res) => {
    res.render("home")
})

router.get("/ss", (req, res) => {
    res.render("ss")
})

// Dunning Kruger Route
router.get("/ss/dk", (req, res) => {
    res.render("dk")
})

// Contribute Router
router.get("/contribute", (req, res) => {
    res.render("contribute")
})





///////////////////////////////
// Export Router
////////////////////////////////
module.exports = router