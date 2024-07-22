// backend/controllers/dashboardController.js
const dashboardController = async (req, res) => {
  const username = req.userData ? req.userData.username : null;
  if (username) {
    res.render("dashboard", { username });
  } else {
    res.redirect("/login");
  }
};

module.exports = dashboardController;
