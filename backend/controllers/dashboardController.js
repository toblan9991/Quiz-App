const dashboardController = async (req, res) => {
  const email = req.userData ? req.userData.email : null;
  if (email) {
    res.render("dashboard", { email });
  } else {
    res.redirect("/login");
  }
};

module.exports = dashboardController;
