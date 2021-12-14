const router = require("express").Router()
const User = require("../models/User.model")

const { isAuthenticated } = require("../middleware/jwt.middleware")

router.get("/my-account", (req, res, next) => {
    User.find()
        .then(user => {
            res.status(200).json(user)
            console.log(user)
        })
        .catch(err => next(err))
})

router.get("/users", (req, res, next) => {
    User.find().then(users => {
        console.log(users)
        res.status(200).json(users)
    })
})

// router.get("/artists", (req, res, next) => {
//     User.find()
// })

module.exports = router
