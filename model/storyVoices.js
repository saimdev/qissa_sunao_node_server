const mongoose = require("mongoose");

const storyVoicesSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
        required: true
    },
    story: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Story',
    },
    voices: [
        {
            voice: {
                type: String,
                required: true
            }
        }
    ]
});

const StoryVoices = mongoose.model("Storyvoice", storyVoicesSchema);
module.exports = StoryVoices;
