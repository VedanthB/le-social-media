require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser())

app.get('/', (req, res) => {
    res.json({msg: "hello"})
})

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log("server is uppp on port" , port)
})