const mongoose = require("mongoose");

const storySchema = new mongoose.Schema({
    storyname: {
        type: String,
        required: false
    },
    writer: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    image_path: {
        type: String,
        required: true
    },
    story: {
        type: String,
        required: true
    },
    clicks: {
        type: Number,
        default: 0
    },
    listens:{
        type: Number,
        default: 0
    },
})


const Story = mongoose.model("Story", storySchema);
module.exports = Story;