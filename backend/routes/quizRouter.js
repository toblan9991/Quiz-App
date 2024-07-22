// backend/routes/quizRouter.js
const express = require("express");
const { getQuizzes, quizScore } = require("../controllers/quizController");

const isAuthenticated = require("../middlewares/authMiddleware");


const router = express.Router();


// router.get('/take-quiz', getQuizzes);
router.get("/take-quiz", isAuthenticated, getQuizzes);
router.get("/score", isAuthenticated, quizScore);


module.exports = router;
