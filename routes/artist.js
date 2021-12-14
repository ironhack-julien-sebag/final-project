const router = require("express").Router()
const User = require("../models/User.model")

router.get("/artists", (req, res, next) => {
    User.find()
        .then(user => res.status(200).json(user))
        .catch(err => next(err))
})
