const { Schema, model } = require("mongoose")

const conversationSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
        artist: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
        message: [
            {
                type: Schema.Types.ObjectId,
                ref: "Message",
            },
        ],
    },
    {
        timestamps: true,
    }
)

const Conversation = model("Conversation", conversationSchema)

module.exports = Conversation
