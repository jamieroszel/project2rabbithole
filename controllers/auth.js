const bcrypt = require("bcryptjs")
const User = require("../models/User")

const getCreate = (req, res) => {
    res.render("auth/create")
}

// User Sign Up
const createSubmit = async (req, res) => {
    const salt = await bcrypt.genSalt(10)
    req.body.password = await bcrypt.hash(req.body.password, salt)
    const user = await User.create(req.body)
    console.log(user)
    res.redirect("/auth/login")
}

// const createSubmit = (req, res)=>{
//     res.json(req.body)
// }

const getLogin = (req, res) => {
    res.render("auth/login")
}

const loginSubmit = async (req, res) => {
    try {
        // First Stop, does the user exist
        const user = await User.findOne({ username: req.body.username });
        if (user) {
          const result = await bcrypt.compare(req.body.password, user.password);
          if (result) {
            req.session.user = {
              username: user.username,
              id: user._id,
            };
            res.redirect("/podcastsindex")
          } else {
            res.status(400).json({ error: "Password Does Not Match" });
          }
        } else {
          res.status(400).json({ error: "User Does Not Exist" });
        }
      } catch (error) {
        res.status(400).json(error);
      }
    };

const logout = (req, res) => {
    req.session.user = undefined
    // res.json({message: "You have logged out."})
    res.redirect('/')
}

const test = (req, res) => {
    res.send("You are logged in.")
}

const actions = {
    getCreate,
    getLogin,
    createSubmit,
    loginSubmit,
    logout,
    test
}

module.exports = actions