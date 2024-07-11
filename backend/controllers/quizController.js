const { Quiz } = require('../models/db');

const getQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    res.json(quizzes);
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
};

module.exports = { getQuizzes };

// const { Quiz } = require('../models/db');

// const getQuizzes = async (req, res) => {
//   try {
//     const quizzes = await Quiz.find();
//     res.render('takeQuiz', { quizzes });
//   } catch (err) {
//     res.status(400).json('Error: ' + err);
//   }
// };

// module.exports = { getQuizzes };
