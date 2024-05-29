const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
        required: true
    },
    name: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: true
    },
    read_status: {
        type: Boolean,
        default: false
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        required: false,
    },
});

const Notification = mongoose.model("Notification", notificationSchema);
module.exports = Notification;
