// backend/routes/homeRouter.js
const express = require("express");
const homeController = require("../controllers/homeController");

const homeRouter = express.Router();

// Route for the home page
homeRouter.get("/", homeController);

module.exports = homeRouter;
