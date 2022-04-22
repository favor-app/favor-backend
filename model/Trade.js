const mongoose = require('mongoose');

const tradeSchema = new mongoose.Schema(
    {
        favorerId: {
            type: String,
            required: true
        },
        favoreeId: {
            type: String
        },
        favorId: {
            type: String,
            required: true
        },
        favorAcceptTime: {
            type: Date,
            default: Date.Now
        },
        favorAcceptTimer: {
            type: Number,
            default: 15
        }
    }
);

module.exports = mongoose.model('Trade', tradeSchema);