// VALIDATION 
const Joi = require('@hapi/joi');

// Register Validation 
const favorValidation = (data, user) => {
    const schema = Joi.object().keys({
        title: Joi.string().min(6).required(), 
        description: Joi.string().min(6).required(), 
        category: Joi.string().min(6).required(),
        favoreeId: Joi.string().min(6).required(),
        favorCoins: Joi.number().less(user.favorCoins)
      });
    return schema.validate(data);
};


module.exports.favorValidation = favorValidation;
