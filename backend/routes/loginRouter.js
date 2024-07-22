// backend/routes/loginRouter.js
const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const path = require("path");
const loginRouter = express.Router();

const { loginForm, loginLogic } = require("../controllers/loginController");

loginRouter.get("/login", loginForm);
loginRouter.post("/login", loginLogic);

module.exports = loginRouter;
