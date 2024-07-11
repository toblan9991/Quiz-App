const express = require('express');
const passport = require('passport');
const { githubAuth, githubAuthCallback, githubAuthRedirect } = require('../controllers/authController');

const authRouter = express.Router();

authRouter.get('/auth/github', githubAuth);
authRouter.get('/auth/github/callback', githubAuthCallback, githubAuthRedirect);

module.exports = authRouter;
