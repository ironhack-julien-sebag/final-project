const { Schema, model } = require("mongoose")

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema(
    {
        fullName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        city: String,
        role: String,
        imageUrl: String,

        // Artists
        genre: String,
        bio: String,
        price: Number,
        available: Array,
        youtube: Array,
        youtubeLink: String,
        facebookLink: String,
        instagramLink: String,

        contacted: [
            {
                type: Schema.Types.ObjectId,
                ref: "User",
            },
        ],

        contactedBy: [
            {
                type: Schema.Types.ObjectId,
                ref: "User",
            },
        ],
    },
    {
        // this second object adds extra properties: `createdAt` and `updatedAt`
        timestamps: true,
    }
)

const User = model("User", userSchema)

module.exports = User
