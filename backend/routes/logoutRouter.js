// backend/routes/logoutRouter.js
const express = require("express");
const logoutController = require("../controllers/logoutController");
const isAuthenticated = require("../middlewares/authMiddleware");

const logoutRouter = express.Router();

//isAuthenticated middleware
logoutRouter.get("/logout", isAuthenticated, logoutController);

module.exports = logoutRouter;
