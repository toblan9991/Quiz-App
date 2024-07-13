// backend/routes/authRouter.js
const express = require("express");
const passport = require("passport");
const {
  githubAuth,
  githubAuthCallback,
  githubAuthRedirect,
} = require("../controllers/authController");

const authRouter = express.Router();

authRouter.get("/github", githubAuth);
authRouter.get("/github/callback", githubAuthCallback, githubAuthRedirect);

module.exports = authRouter;
