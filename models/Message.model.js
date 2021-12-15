const { Schema, model } = require("mongoose")

const messageSchema = new Schema(
    {
        sender: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
        receiver: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
        date: String,
        // message: [
        //     {
        //         sender: {
        //             type: Schema.Types.ObjectId,
        //             ref: "User",
        //         },

        //         receiver: {
        //             type: Schema.Types.ObjectId,
        //             ref: "User",
        //         },

        //         content: String,
        //     },
        //     {
        //         timestamps: true,
        //     },
        // ],
        message: Array,
    },
    {
        timestamps: true,
    }
)

const Message = model("Message", messageSchema)

module.exports = Message
