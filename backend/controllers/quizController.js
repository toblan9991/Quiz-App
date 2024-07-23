const { Quiz } = require("../models/db");

const getQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    res.render("takeQuiz", { quizzes });
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
};

const quizScore = async (req, res) => {
  try {
    const score = req.query.score || 0;
    res.render("score", { score });
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
};

module.exports = { getQuizzes, quizScore };
