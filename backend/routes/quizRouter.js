const express = require('express');
const { getQuizzes } = require('../controllers/quizController');

const router = express.Router();

router.get('/api/quiz-data', getQuizzes);

module.exports = router;
