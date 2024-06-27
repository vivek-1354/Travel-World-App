const mongoose = require("mongoose");

const wishlistSchema = new mongoose.Schema({
    hotelId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "hotel"
    }
})

const wishlistModel = mongoose.model("Wishlist", wishlistSchema)

module.exports = wishlistModel; //exporting the model