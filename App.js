import React, { useState } from 'react';

var data = require('./data.json');
const questions = data['list'];

const randomizeQuestions = (questions) => {
  for (let i = questions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [questions[i], questions[j]] = [questions[j], questions[i]];
  }
  return questions;
}

const randomizedQuestions = randomizeQuestions(questions);

const TuringTest = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (answer) => {
    if (answer === currentQuestion.answer) {
      setScore(score + 1);
      setFeedback('Correct!');
    } else {
      setFeedback('Incorrect!');
    }
  }

  const [feedback, setFeedback] = useState('');

  const currentQuestion = randomizedQuestions[currentQuestionIndex];

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Chat GPT Turing Test</h1>
      {currentQuestion &&
        <div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button style={{ margin: 10, backgroundColor: '#4CAF50', color: 'white', padding: 10, borderRadius: 4 }} onClick={() => handleAnswer(true)}>Human</button>
            <button style={{ margin: 10, backgroundColor: '#F44336', color: 'white', padding: 10, borderRadius: 4 }} onClick={() => handleAnswer(false)}>Chat GPT</button>
          </div>
          <p>Is the following writby a human or Chat GPT?</p>
          <p>{currentQuestion.question}</p>
          {feedback && <p>{feedback}</p>}
          {feedback &&
            <button style={{ backgroundColor: '#2196F3', color: 'white', padding: 10, borderRadius: 4 }} onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}>Next</button>
          }
        </div>
      }
      {false &&
        <p>Game over! Your score is {score} / {questions.length}.</p>
      }
    </div>
  );
};
export default TuringTest;
