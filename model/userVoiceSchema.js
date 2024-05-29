const mongoose = require("mongoose");

const userVoiceSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'USER', 
        required: true
    },
    voicename: {
        type: String,
        required: true
    },
    voice_path: {
        type: String,
        required: true
    },
})


const UserVoice = mongoose.model("Uservoice", userVoiceSchema);
module.exports = UserVoice;