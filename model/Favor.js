const mongoose = require('mongoose');

const favorSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            max: 255,
            min: 3
        },
        description: {
            type: String,
            required: true,
            max: 1024,
            min: 6
        },
        category: {
            type: String,
            required: true,
            max: 1024,
            min: 6
        },
        status:{
            type: String,
            required: true,
            default: "Requested"
        },
        favoreeId: {
            type: String,
            required: true,
            max: 1024,
            min: 6
        },
        favorCoins: {
            type: Number,
            max: 4,
            min: 1,
            default: 1
        },
        favorRequestTime: {
            type: Date,
            default: Date.now
        },
        favorRequestTimer: {
            type: Number,
            default: 60
        }
    }
);

module.exports = mongoose.model('Favor', favorSchema);