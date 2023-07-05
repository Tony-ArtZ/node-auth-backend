const mongoose = require("mongoose");

mongoose
    .connect(process.env.MONGOOSE_DB_URI, {
        useUnifiedTopology: true,
        useNewURLParser: true,
    })
    .catch((err) => {
        console.log(err.message);
    });

mongoose.connection.on("connected", () => console.log("connected to MongoDB"));
mongoose.connection.on("err", () => console.log(err.message));
mongoose.connection.on("disconnected", () => console.log("disconnected MongoDB"));

process.on("SIGINT", async () => {
    await mongoose.disconnect();
    process.exit(0);
});
