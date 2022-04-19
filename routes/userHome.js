const router = require('express').Router();
const verify = require('./verifyJWTToken');
const User = require('../model/User');

router.get('/', verify, async (req, res) => {
    try{
        const details = await User.findById(req.user._id);
        res.send({name: details.name});
    }
    catch(err){
        res.json({message: err});
    }
});

module.exports = router;
