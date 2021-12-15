const router = require("express").Router()
const Message = require("../models/Message.model")

const APP_URL = "http://localhost:3000/"

router.put("/send-message", (req, res, next) => {
    const { sender, receiver, date, message } = req.body

    if (message === "") {
        res.status(400).json({ errorMessage: "Provide a message" })
    }

    Message.create({ sender, receiver, date, message })
        .then(createdMessage => res.status(200).json(createdMessage))
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: "Internal server error" })
        })
})

router.get("/all-messages", (req, res, next) => {
    Message.find()
        .populate("sender")
        .populate("receiver")
        .then(messageFromDb => {
            res.status(200).json(messageFromDb)
        })
})

module.exports = router
