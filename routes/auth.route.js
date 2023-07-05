const express = require("express");
const router = express.Router();
const createError = require("http-errors");
const mongoose = require("mongoose");
const {userLoginSchema} = require("../helpers/schema_validation");
const User = require("../models/user.model");

router.post("/register", async (req, res, next) => {
    try {
        const result = await userLoginSchema.validateAsync(req.body)
        const { email, password } = req.body;

        const existingUser = await User.findOne({ email: result.email });
        if (existingUser) throw createError.Conflict("User already exists");

        const user = new User(result)
        const savedUser = await user.save()

        res.send(savedUser)

    } catch (err) {
        next(err);
    }
});

router.post("/login", (req, res, next) => {
    try {
        const {email, password} = req.body;
        if (!email || !password) throw createError.BadRequest();
    } catch (err) {

    }
});

router.post("/refreshtoken", (req, res, next) => {
    res.send("route");
});

router.delete("/logout", (req, res, next) => {
    res.send("route");
});

module.exports = router;
