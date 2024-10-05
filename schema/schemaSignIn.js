const joi = require("joi")
const schema = joi.object({
    fname : joi.string().min(2).max(15).required(),
    lname : joi.string().min(2).max(15).required(),
    email : joi.string().email().required(),
    day: joi.number().integer().min(1).max(31),
    month: joi.number().integer().min(1).max(12),
    year: joi.number().integer().min(1900).max(2006),
    password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    rpassword: joi.ref('password'),
})

module.exports = schema