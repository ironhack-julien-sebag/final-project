const router = require("express").Router()
const User = require("../models/User.model")

const { isAuthenticated } = require("../middleware/jwt.middleware")

const APP_URL = "http://localhost:3000/"

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

router.put("/edit-user", (req, res, next) => {
    // const id = req.params.id
    const { fullName, city, email, id } = req.body
    
    // console.log(req.body)
    
    User.findByIdAndUpdate(id, { fullName, city, email }, { new: true })
        .then(updatedUser => {
            // console.log(updatedUser)
            res.status(200).json(updatedUser)
        })
        .catch(err => console.log(err))
})

module.exports = router
