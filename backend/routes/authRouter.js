const express = require('express');
const passport = require('passport');
const { githubAuth, githubAuthCallback, githubAuthRedirect } = require('../controllers/authController');

const authRouter = express.Router();

authRouter.get('/auth/github', githubAuth);
authRouter.get('/auth/github/callback', githubAuthCallback, githubAuthRedirect);

// authRouter.use((req, res, next) => {
//   console.log(`Received request: ${req.method} ${req.url}`);
//   next();
// });

// authRouter.get('/auth/github', (req, res, next) => {
//   console.log('GET /auth/github triggered');
//   next();
// }, githubAuth);

// authRouter.get('/auth/github/callback', (req, res, next) => {
//   console.log('GET /auth/github/callback triggered');
//   next();
// }, githubAuthCallback, githubAuthRedirect);

module.exports = authRouter;
