// backend/routes/registerRouter.js
const express = require("express");
const registerController = require("../controllers/registerController");

const registerRouter = express.Router();

registerRouter.get("/register", registerController.getRegister);

registerRouter.post("/register", registerController.postRegister);

module.exports = registerRouter;
