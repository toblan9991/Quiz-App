const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;
const jwt = require('jsonwebtoken'); 
const { userapps } = require('../models/db');

// console.log('GITHUB_CLIENT_ID:', process.env.GITHUB_CLIENT_ID);
// console.log('GITHUB_CLIENT_SECRET:', process.env.GITHUB_CLIENT_SECRET);

passport.use(new GitHubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
 callbackURL: "https://23.22.212.18:3000/auth/github/callback" 
 //callbackURL: "http://localhost:3000/auth/github/callback" http://127.0.0.1/auth/github/callback
}, async (accessToken, refreshToken, profile, done) => {
  try {
    console.log('GitHub profile:', profile);
    let user = await userapps.findOne({ githubId: profile.id });
    if (!user) {
      console.log('Creating new user with GitHub profile:', profile);
      user = await userapps.create({
        username: profile.username,
        githubId: profile.id,
        role: 'user'
      });
    }
    console.log('User found or created:', user);
    return done(null, user);
  } catch (error) {
    console.error('Error in GitHub strategy callback:', error);
    return done(error, null);
  }
}));

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
const githubAuthCallback = (req, res, next) => {
  // console.log('GitHub authentication callback triggered');
  passport.authenticate('github', (err, user, info) => {
    if (err) {
      console.error('GitHub authentication error:', err);
      return next(err);
    }
    if (!user) {
      console.log('GitHub authentication failed, redirecting to login.');
      return res.redirect('/login');
    }
    req.logIn(user, (err) => {
      if (err) {
        console.error('Login error after GitHub authentication:', err);
        return next(err);
      }
      console.log('GitHub authentication successful, user logged in:', user);
      next();
    });
  })(req, res, next);
};

const githubAuthRedirect = (req, res) => {
  // console.log('User authenticated, redirecting to dashboard.');
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










