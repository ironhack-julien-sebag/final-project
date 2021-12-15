const router = require("express").Router()
const User = require("../models/User.model")
const jwt = require("jsonwebtoken")

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
    const { fullName, city, email, id } = req.body

    User.findByIdAndUpdate(id, { fullName, city, email }, { new: true })
        .then(updatedUser => {
            const payload = {
                fullName,
                email,
                city,
                id,
            }

            const authToken = jwt.sign(payload, process.env.TOKEN_SECRET, {
                algorithm: "HS256",
                expiresIn: "6h",
            })

            res.status(200).json({ token: authToken, user: updatedUser })
        })
        .catch(err => console.log(err))
})

router.delete("/delete/:id", (req, res, next) => {
    const id = req.params.id

    User.findByIdAndDelete(id).then(() => {
        res.status(200).json({ message: "User deleted" })
    })
})

module.exports = router
