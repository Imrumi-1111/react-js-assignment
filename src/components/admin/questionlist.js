import React, { useEffect, useState } from 'react';
import axios from 'axios';

const QuestionList = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    axios.get('/api/questions').then((response) => {
      setQuestions(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Question List</h2>
      {questions.map((question) => (
        <div key={question.id}>{question.question}</div>
      ))}
    </div>
  );
};

export default QuestionList;
