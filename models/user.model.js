const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    email : {
        type: String,
        required: [true, "email required"],
        lowercase: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: [true, "password required"]
    }
})

const user = mongoose.model(userSchema)
module.exports = user
