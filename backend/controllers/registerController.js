const bcrypt = require("bcrypt");
const { userapps } = require("../models/db");

const registerController = {};

registerController.getRegister = (req, res) => {
  res.render("register"); // Assuming you're using a template engine like EJS or Pug
};

registerController.postRegister = async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    await userapps.create({
      username,
      password: hashedPassword,
    });
    res.redirect("/login");
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).send("Error registering user");
  }
};

module.exports = registerController;
