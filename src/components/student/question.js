import React, { useState } from 'react';

const Question = ({ question }) => {
    const [selectedAnswer, setSelectedAnswer] = useState('');
  
    const handleAnswerSelect = (option) => {
      setSelectedAnswer(option);
    };

  return (
    <div>
      <h3>{question.Question}</h3>
      {question.Options.map((option, index) => (
        <div key={index}>
          <input
            type="radio"
            id={option}
            name={question.Question}
            value={option}
            checked={selectedAnswer === option}
            onChange={() => handleAnswerSelect(option)}
          />
          <label htmlFor={option}>{option}</label>
        </div>
      ))}
    </div>
  );
};

export default Question;
