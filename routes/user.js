const router = require("express").Router()
const User = require("../models/User.model")
const jwt = require("jsonwebtoken")
const nodemailer = require("nodemailer")

const fileUploader = require("../config/cloudinary.config")

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

router.put("/edit-user", fileUploader.single("imageUrl"), (req, res, next) => {
    const { fullName, city, email, id, imageUrl } = req.body

    console.log(req.file)

    User.findByIdAndUpdate(
        id,
        { fullName, city, email, imageUrl },
        { new: true }
    )
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

router.put(
    "/edit-avatar",
    fileUploader.single("imageUrl"),
    (req, res, next) => {
        const { imageUrl } = req.body
        console.log(imageUrl)
    }
)

router.delete("/delete/:id", (req, res, next) => {
    const id = req.params.id

    User.findByIdAndDelete(id).then(() => {
        res.status(200).json({ message: "User deleted" })
    })
})

let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.WORD,
    },
})

router.post("/contact", (req, res, next) => {
    const { sender, receiver, date, message } = req.body
    console.log(req.body)

    let mailDetails = {
        from: process.env.EMAIL,
        to: receiver,
        subject: "New enquiry on Book a Band",
        text: `Hi, you have a new enquiry from ${sender} for the ${date}. This is the message: ${message}`,
    }

    transporter.sendMail(mailDetails, function (err, data) {
        if (err) {
            console.log(err)
        } else {
            console.log("Email sent successfully")
        }
    })
})

module.exports = router
