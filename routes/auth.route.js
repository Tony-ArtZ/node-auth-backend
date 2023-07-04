const express = require("express")
const router = express.Router()

router.post("/register", (req, res, next) => {
    res.send("route")
})


router.post("/login", (req, res, next) => {
    res.send("route")
})

router.post("/refreshtoken", (req, res, next) => {
    res.send("route")
})

router.delete("/logout", (req, res, next) => {
    res.send("route")
})

module.exports = router
