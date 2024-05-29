const mongoose = require("mongoose");

const favouriteSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
        required: true
    },
    story:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Story', 
        required: true
    }
});

const Favourite = mongoose.model("Favourite", favouriteSchema);
module.exports = Favourite;
