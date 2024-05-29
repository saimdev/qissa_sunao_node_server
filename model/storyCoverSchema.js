const mongoose = require("mongoose");

const storyCoverSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
        required: true
    },
    story: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Story',
    },
    photoPath: {
        type: String,
        required: true
    },
});

const StoryCover = mongoose.model("Storycover", storyCoverSchema);
module.exports = StoryCover;
