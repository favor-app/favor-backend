const router = require("express").Router();
const verify = require("./verifyJWTToken");
const Favor = require("../model/Favor");

// Validate register and login fields
const { favorValidation } = require("../validation/favorValidation");

router.get('/:favorId', verify, async (req, res) => {
    try{
        const details = await Favor.findById(req.params.favorId);
        res.send(details);
    }
    catch(err){
        res.json({message: err});
    }
});

router.post("/", verify, async (req, res) => {
    // Validating the Data
    const {error} = favorValidation(req.body, req.user);
    if(error) return res.status(400).send(error.details[0].message);

    // Creatng a Favor
    const favor = new Favor({
        title: req.body.title,
        description: req.body.description,
        category: req.body.category,
        favoreeId: req.user._id,
        favorCoins: req.body.favorCoins,
    });

    try {
        const savedFavor = await favor.save();
        res.send({ favor: favor._id });
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = router;
