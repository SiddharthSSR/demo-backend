import dotenv from "dotenv/config"
import connectDB from "./db/index.js";


import express from "express";
const app = express()

connectDB()

app.get("/", (req, res) => {
    res.send("Hello World")
})

app.listen(process.env.PORT, () => {
    console.log(`App is listening on port ${process.env.PORT}`);
})

/*
* This approach has all the functions and methods inside index.js
* Polluting the file too much
* Shifting to folder DB for functions and then calling them from this file
import express from "express";
const app = express();

( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("ERROR:", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port: ${process.env.PORT}`)
        })

    } catch(error) {
        console.error("ERROR:", error);
        throw error
    }
})()
*/