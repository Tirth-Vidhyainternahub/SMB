const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// Default route
app.get("/", (req, res) => {
    res.send("Welcome to the Sports Management API");
});

module.exports = app;
