const logoutController = (req, res) => {
  res.clearCookie("token");
  res.redirect("/login");
};

module.exports = logoutController;
