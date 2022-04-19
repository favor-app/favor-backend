const router = require('express').Router();
const verify = require('./verifyJWTToken');
const User = require('../model/User');

//Gets the details of the logged in user
// users/
router.get('/', verify, async (req, res) => {
    try{
        const details = await User.findById(req.user._id);
        res.send(details);
    }
    catch(err){
        res.json({message: err});
    }
});

//Gets the details of any user
// Must be logged in to use
// users/userId
router.get('/:userId', verify, async (req, res) => {
    try{
        const details = await User.findById(req.params.userId);
        res.send(details);
    }
    catch(err){
        res.json({message: err});
    }
});

module.exports = router;
