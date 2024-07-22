// backend/controllers/logoutController.js
const logoutController = (req, res, next) => {
  res.clearCookie("token"); // Clear the JWT token cookie
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    req.session.destroy((err) => { // Destroy the session
      if (err) {
        return next(err);
      }
      res.clearCookie('connect.sid'); // Clear the session cookie
      res.redirect("/login");
    });
  });
};

module.exports = logoutController;
