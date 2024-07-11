import React, { useEffect, useState } from 'react';
import QusCardTwo from "./QusCardTwo";

function TakeQuiz() {
  const [questionSet, setQuestionSet] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/api/quiz-data')
      .then(response => response.json())
      .then(data => {
        if (data && data.length > 0) {
          const quizData = formatQuizData(data[0]); 
          setQuestionSet(quizData.questions);
        } else {
          setError('No quiz data available.');
        }
        setLoading(false);
      })
      .catch(error => {
        console.error('Failed to fetch quiz data:', error);
        setError('Failed to load quiz. Please try again later.');
        setLoading(false);
      });
  }, []);

  function formatQuizData(quiz) {
    return {
      ...quiz,
      questions: quiz.questions.map((q, index) => ({
        no: index + 1,
        question: q.text,
        choices: q.options.map(option => option.text),
        answer: q.options.find(option => option.is_correct).text,
      }))
    };
  }

  if (loading) return <p>Loading quiz...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Quiz</h1>
      {questionSet.length > 0 ? (
        <QusCardTwo questionSet={questionSet} />
      ) : (
        <p>No questions available.</p>
      )}
    </div>
  );
}

export default TakeQuiz;
