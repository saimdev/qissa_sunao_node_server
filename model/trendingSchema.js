const mongoose = require("mongoose");

const trendingSchema = new mongoose.Schema({
    story:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Story', 
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
});

const Trending = mongoose.model("Trending", trendingSchema);
module.exports = Trending;
