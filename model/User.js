const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            max: 255,
            min: 3
        },
        email: {
            type: String,
            required: true,
            max: 1024,
            min: 6
        },
        password: {
            type: String,
            required: true,
            max: 1024,
            min: 6
        },
        school: {
            type: String,
            required: true,
            max: 1024,
            min: 4,
            default: 'UCLA'
        },
        phone: {
            type: Number,
            required: true
        },
        favorCoins: {
            type: Number, 
            default: 1,
            min: 0
        },
        
    }
);

module.exports = mongoose.model('User', userSchema);