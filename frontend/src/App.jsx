import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TakeQuiz from './components/TakeQuiz';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/take-quiz" element={<TakeQuiz />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
