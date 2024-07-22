// server.js
require("dotenv").config({ path: "./backend/.env" });
const express = require("express");
const bodyParser = require('body-parser');
const session = require("express-session");
const passport = require("passport");
const appMiddlewares = require("./backend/middlewares/appMiddlewares");
const connectDB = require("./backend/models/db").connectDB;
const loginRouter = require("./backend/routes/loginRouter");
const registerRouter = require("./backend/routes/registerRouter");
const dashboardRouter = require("./backend/routes/dashboardRouter");
const logoutRouter = require("./backend/routes/logoutRouter");
const homeRouter = require("./backend/routes/homeRouter");
const authRouter = require("./backend/routes/authRouter");
const quizRouter = require("./backend/routes/quizRouter");

const app = express();
const { githubAuth, githubAuthCallback, githubAuthRedirect } = require('./backend/controllers/authController');

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false } // Set to true if using HTTPS
}));

app.use(passport.initialize());
app.use(passport.session());

// Middleware setup
appMiddlewares(app);

// Connect to MongoDB
connectDB()
  .then(() => {
    // Routes setup
    app.use("/", homeRouter);
    app.use("/", loginRouter);
    app.use("/", registerRouter);
    app.use("/", dashboardRouter);
    app.use("/", logoutRouter);
    app.use("/", authRouter);
    app.use("/", quizRouter); 

    // app.get('/auth/github', githubAuth);
    // app.get('/auth/github/callback', githubAuthCallback, githubAuthRedirect);

    // Start the server
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to database:", error);
  });

  app.use((err, req, res, next) => {
    console.error('Error occurred:', err);
    res.status(500).send('Internal Server Error');
  });

  // require('dotenv').config({ path: './.env' });
