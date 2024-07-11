const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;
const { userapps } = require('../models/db');

passport.use(new GitHubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: "http://localhost:3000/auth/github/callback"
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
  res.redirect('/dashboard');
};

module.exports = {
  githubAuth,
  githubAuthCallback,
  githubAuthRedirect
};
