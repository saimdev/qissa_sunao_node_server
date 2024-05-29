const mongoose = require("mongoose");

const voiceSchema = new mongoose.Schema({
    voicename: {
        type: String,
        required: true
    },
    voice_path: {
        type: String,
        required: true
    },
})


const Voice = mongoose.model("Voice", voiceSchema);
module.exports = Voice;