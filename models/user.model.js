const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

const Schema = mongoose.Schema
const userSchema = new Schema({
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

userSchema.pre("save", async function(next) {
    try {
        const salt = bcrypt.genSaltSync(10)
        this.password = await bcrypt.hash(this.password, salt)
    }
    catch (err) {
        next(err)
    }
})

const user = mongoose.model("Users", userSchema)
module.exports = user
