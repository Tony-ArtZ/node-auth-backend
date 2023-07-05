const {required} = require("@hapi/joi/lib/base")
const joi = require("joi")

const userLoginSchema = joi.object({
    email: joi.string().email().lowercase().required(),
    password: joi.string().required().min(8).pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
})

module.exports = {userLoginSchema}
