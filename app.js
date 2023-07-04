const express = require("express")
require("dotenv").config()
const createError = require("http-errors")
const authRoute = require("./routes/auth.route")
const app = express()
const port = process.env.PORT || 8080

app.get("/", (req, res) => {
    res.send("Hello")
})

app.use("/auth", authRoute)

app.use((req, res, next) => {
    next(createError.NotFound("Route does not exist"))
})

app.use ((err, req, res, next) => {
    res.status(err.status||500).send({
        error: {
            status: err.status||500,
            message: err.message
        }
    })
})
app.listen(port, ()=>console.log(`listening on port ${port}`))
