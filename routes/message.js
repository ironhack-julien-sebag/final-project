const router = require("express").Router()
const Message = require("../models/Message.model")
const Conversation = require("../models/Conversation.model")

const APP_URL = "http://localhost:3000/"

router.put("/send-message", (req, res, next) => {
    const { sender, receiver, date, message } = req.body
    // const { user, artist, message, date } = req.body
    const id = req.params.id

    if (message === "") {
        res.status(400).json({ errorMessage: "Provide a message" })
    }

    // Conversation.findOne({ user, artist }).then(foundConversation => {
    //     if (user === user && artist === artist) {
    //         Conversation.findByIdAndUpdate(id, { message }).then(newMessage => {
    //             res.status(200).json(newMessage)
    //         })
    //     } else {
    //         Conversation.create({ user, artist, message, date })
    //             .then(createdConversation => {
    //                 res.status(200).json(createdConversation)
    //             })
    //             .catch(err => {
    //                 res.status(500).json({ message: "Internal server error" })
    //             })
    //     }
    //     // console.log(`User: ${user}, Artist: ${artist}`)
        
    // })

    Message.create({ sender, receiver, date, message })
        .then(createdMessage => {
            res.status(200).json(createdMessage)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: "Internal server error" })
        })

    // if()

    // Conversation.create({ user, artist, message }).then(createdConversation)
})

router.get("/all-messages", (req, res, next) => {
    Message.find()
        .populate("sender")
        .populate("receiver")
        .then(messageFromDb => {
            res.status(200).json(messageFromDb)
        })
})

router.get("/conversation/:id", (req, res, next) => {
    Conversation.find()
        .populate("user")
        .populate("artist")
        .populate("message")
        .then(conversationFromDb => {
            res.status(200).json(conversationFromDb)
        })
})

module.exports = router
