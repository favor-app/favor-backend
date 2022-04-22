const router = require("express").Router();
const verify = require("./verifyJWTToken");
const Favor = require("../model/Favor");
const Trade = require("../model/Trade");

// Validate trade
const { tradeValidation } = require("../validation/tradeValidation");

// Post a favor to the trade table 
router.post("/", verify, async (req, res) => {
    // Validating the Data
    const { error } = tradeValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const details = await Favor.findById(req.body.favorId).exec();
    const favoreeId = details.favoreeId
    // Creatng a Favor
    const trade = new Trade({
        favorerId: req.user._id,
        favoreeId: favoreeId,
        favorId: req.body.favorId
    });

    try {
        const savedTrade = await trade.save();
        res.send({ trade: trade._id });
    } catch (err) {
        res.status(400).send(err);
    }
});


// Get a Favor by Favoree ID
router.get("/byFavoreeId", verify, async (req, res) => {
    try {
        let favoreeId = req.query.favoreeId;
        if (!favoreeId) {
            res.status(400).send("Wrong Query Paramaters");
            return;
        }
        const details = await Trade.find({
            favoreeId: favoreeId,
        }).exec();
        res.send(details);
    } catch (err) {
        res.json({ message: err });
    }
});

// Get a Favor by Favorer ID
router.get("/byFavorerId", verify, async (req, res) => {
    try {
        let favorerId = req.query.favorerId;
        if (!favorerId) {
            res.status(400).send("Wrong Query Paramaters");
            return;
        }
        const details = await Trade.find({
            favorerId: favorerId,
        }).exec();
        res.send(details);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;