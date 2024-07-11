const express = require('express');
const { getQuizzes } = require('../controllers/quizController');

const router = express.Router();

router.get('/api/quiz-data', getQuizzes);
// router.get('/take-quiz', getQuizzes);

module.exports = router;
