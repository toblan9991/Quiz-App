// backend/controllers/authController.js
const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;
const jwt = require('jsonwebtoken'); 
const { userapps } = require('../models/db');

passport.use(new GitHubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  // callbackURL: "http://localhost:3000/auth/github/callback"
  callbackURL: "http://35.173.232.79:3000/auth/github/callback" // for aws server https://35.173.232.79/
},
async (accessToken, refreshToken, profile, done) => {
  try {
    let user = await userapps.findOne({ githubId: profile.id });
    if (!user) {
      user = await userapps.create({
        username: profile.username,
        githubId: profile.id,
        role: 'user'
      });
    }
    return done(null, user);
  } catch (error) {
    return done(error, null);
  }
}
));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await userapps.findById(id);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

const githubAuth = passport.authenticate('github', { scope: [ 'user:email' ] });
const githubAuthCallback = passport.authenticate('github', { failureRedirect: '/login' });

const githubAuthRedirect = (req, res) => {
  const token = jwt.sign(
    { username: req.user.username, role: req.user.role },
    "anykey",
    { expiresIn: "3d" }
  );
  res.cookie("token", token, {
    maxAge: 3 * 24 * 60 * 60 * 1000, // 3 days
    httpOnly: true,
  });
  res.redirect('/dashboard');
};

module.exports = {
  githubAuth,
  githubAuthCallback,
  githubAuthRedirect
};
