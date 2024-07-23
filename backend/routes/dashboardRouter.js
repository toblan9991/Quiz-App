const express = require("express");
const dashboardController = require("../controllers/dashboardController");
const isAuthenticated = require("../middlewares/authMiddleware");

const dashboardRouter = express.Router();

dashboardRouter.get("/dashboard", isAuthenticated, dashboardController);

module.exports = dashboardRouter;
