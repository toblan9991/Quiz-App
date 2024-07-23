const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const path = require("path");
const { userapps, connectDB } = require("../models/db");

const loginForm = (req, res) => {
  res.render("login");
};

const loginLogic = async (req, res) => {
  const { username, password } = req.body;
  try {
    const userFound = await userapps.findOne({ username });

    if (userFound && (await bcrypt.compare(password, userFound.password))) {
      const token = jwt.sign(
        { username: userFound.username, role: userFound.role },
        "anykey",
        { expiresIn: "3d" }
      );
      console.log(`token: `, token);
      res.cookie("token", token, {
        maxAge: 3 * 24 * 60 * 60 * 1000, // 3 days
        httpOnly: true,
      });
      res.redirect("/dashboard");
    } else {
      res.send("Invalid login credentials");
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).send("Server error during login");
  }
};

module.exports = {
  loginForm,
  loginLogic,
};
