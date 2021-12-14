const router = require("express").Router()
const User = require("../models/User.model")

const { isAuthenticated } = require("../middleware/jwt.middleware")

router.get("/my-account", (req, res, next) => {
    User.find()
        .then(user => {
            res.status(200).json(user)
        })
        .catch(err => next(err))
})

router.get("/users", (req, res, next) => {
    User.find().then(users => {
        res.status(200).json(users)
    })
})

module.exports = router
