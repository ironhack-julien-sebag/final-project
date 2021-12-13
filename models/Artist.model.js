const { Schema, model } = require("mongoose")

const artistSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        genre: String,
        bio: String,
        price: Number,
        available: Array,
        picture: String,
        youtube: Array,
        location: String,
        follow: Array,
        youtubeLink: String,
        facebookLink: String,
        instagramLink: String,
        artistId: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
    },
    {
        timestamps: true,
    }
)

const Artist = model("Artist", artistSchema)

module.exports = Artist