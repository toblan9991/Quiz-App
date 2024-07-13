const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");
const session = require("express-session");

const appMiddlewares = (app) => {
  // Middleware
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());

  // Express session
  app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false } // Set to true if using HTTPS
  }));

  //view engine and views directory
  app.set("view engine", "ejs");
  app.set("views", path.join(__dirname, "../../frontend/views"));
};

module.exports = appMiddlewares;

