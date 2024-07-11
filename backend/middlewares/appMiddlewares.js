// backend/middlewares/appMiddlewares.js
const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");

const appMiddlewares = (app) => {
  // Middleware
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());

  //view engine and views directory
  app.set("view engine", "ejs");
  app.set("views", path.join(__dirname, "../../frontend/views"));
};

module.exports = appMiddlewares;
