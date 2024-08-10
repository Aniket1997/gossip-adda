// models/Group.js
const mongoose = require('mongoose');

const GroupSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    isChannel: { type: Boolean, default: false }, // if true, it's a channel
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], // List of group/channel members
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // The user who created the group/channel
}, { timestamps: true });

module.exports = mongoose.model('Group', GroupSchema);
