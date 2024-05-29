const mongoose = require("mongoose");

const storyImagesSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
        required: true
    },
    story: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Story',
    },
    images: [
        {
            image: {
                type: String,
                required: true
            }
        }
    ]
});

const StoryImages = mongoose.model("Storyimage", storyImagesSchema);
module.exports = StoryImages;
