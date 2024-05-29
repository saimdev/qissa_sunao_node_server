const mongoose = require("mongoose");

const userStorySchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
        required: true
    },
    storyname: {
        type: String,
        required: true
    },
    storycontent: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    uservoice: {
        type: String,
        required: true
    },
    storycover: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Storyimage', 
        required: true
    },
    storyimages: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Storyimage', 
        required: true
    },
    storyvoices: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Storyvoice', 
        required: true
    },
    
})


const UserStory = mongoose.model("Userstory", userStorySchema);
module.exports = UserStory;