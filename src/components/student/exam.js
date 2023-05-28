import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Question from './question';

const Exam = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    axios.get('/api/questions').then((response) => {
      const randomQuestions = response.data.sort(() => 0.5 - Math.random()).slice(0, 10);
      setQuestions(randomQuestions);
    });
  }, []);

  return (
    <div>
      <h2>Exam</h2>
      {questions.map((question) => (
        <Question key={question.id} question={question} />
      ))}
    </div>
  );
};

export default Exam;
