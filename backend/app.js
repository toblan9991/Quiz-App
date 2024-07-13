const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
const connectDB = require("./backend/models/db").connectDB;
const appMiddlewares = require("./backend/middlewares/appMiddlewares");
const homeRouter = require("./backend/routes/homeRouter");
const loginRouter = require("./backend/routes/loginRouter");
const registerRouter = require("./backend/routes/registerRouter");
const dashboardRouter = require("./backend/routes/dashboardRouter");
const logoutRouter = require("./backend/routes/logoutRouter");
const authRouter = require("./backend/routes/authRouter");

const app = express();

app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }
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

    // Start the server
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to database:", error);
  });
