import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ImageUploader from '../image/ImageUploader';

const QuestionEdit = () => {
  const { id } = useParams();
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '', '', '']);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [image, setImage] = useState(null);

  useEffect(() => {
    // Fetch question data using the id param
  }, [id]);

  const handleOptionChange = (index, value) => {
    const updatedOptions = [...options];
    updatedOptions[index] = value;
    setOptions(updatedOptions);
  };

  const handleQuestionSubmit = () => {
    // Save the edited question with options, correct answer, and image
    setImage(image)
  };

  return (
    <div>
      <textarea value={question} onChange={(e) => setQuestion(e.target.value)} />

      {options.map((option, index) => (
        <input
          type="text"
          key={index}
          value={option}
          onChange={(e) => handleOptionChange(index, e.target.value)}
        />
      ))}

      <select value={correctAnswer} onChange={(e) => setCorrectAnswer(e.target.value)}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>

      <ImageUploader setImage={setImage} />

      <button onClick={handleQuestionSubmit}>Save</button>
    </div>
  );
};

export default QuestionEdit;
