const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const path = require("path");
const app = express();

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Set the view engine and views directory
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "..", "frontend", "views"));
// MongoDB connection URL with properly encoded password
const url =
  "mongodb+srv://ojugbeleolusegun:wNjrUe0sC0ERZpbB@mern-cluster0.7hdkpgd.mongodb.net/students-db";

const connectDB = async () => {
  try {
    await mongoose.connect(url);
    console.log("Database connected...");
  } catch (error) {
    console.log("Error in connection", error);
  }
};
connectDB();

// Define the user schema and model
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  role: {
    type: String,
    default: "user",
  },
});
const User = mongoose.model("User", userSchema);

// Custom middleware
const isAuthenticated = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.redirect("/login");
  }
  jwt.verify(token, "anykey", (err, decoded) => {
    if (err) {
      return res.redirect("/login");
    }
    req.userData = decoded;
    next();
  });
};

const isAdmin = (req, res, next) => {
  if (req.userData && req.userData.role === "admin") {
    return next();
  } else {
    res.send("Forbidden: You do not have access, admin only");
  }
};

// Routes
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  await User.create({
    username,
    password: hashedPassword,
  });
  res.redirect("/login");
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const userFound = await User.findOne({ username });
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
});

app.get("/dashboard", isAuthenticated, (req, res) => {
  const username = req.userData ? req.userData.username : null;
  if (username) {
    res.render("dashboard", { username });
  } else {
    res.redirect("/login");
  }
});

app.get("/logout", (req, res) => {
  res.clearCookie("token");
  res.redirect("/login");
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`);
});
