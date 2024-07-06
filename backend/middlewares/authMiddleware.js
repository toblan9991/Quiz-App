const jwt = require("jsonwebtoken");

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

module.exports = isAuthenticated;
