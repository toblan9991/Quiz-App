const express = require("express");
const { getQuizzes, quizScore } = require("../controllers/quizController");

const router = express.Router();

router.get("/api/quiz-data", getQuizzes);
// router.get('/take-quiz', getQuizzes);
router.get("/score", quizScore);

module.exports = router;
