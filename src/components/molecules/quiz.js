import styles from './quiz.module.css'
import React, { useState } from 'react'
import Timer from './timer'


export default function Quiz() {


    const questionsData = [
        {
            Question: "Today is Monday, After 63 days,it will be",
            Options: ['Tuesday', 'Monday', 'Thursday', 'Sunday'],
            CorrectAnswer: "Monday"

        },
        {
            Question: "The International Literacy Day is observed on",
            Options: ['Sep 8', 'Sep 28', 'May 2', 'Sep 22'],
            CorrectAnswer: "Sep 8"

        },
        {
            Question: "September 27 is celebrated every year as",
            Options: ["Teachers' Day", 'National Integration Day', 'World Tourism Day', 'Earthday'],
            CorrectAnswer: "World Tourism Day"

        },
        {
            Question: "World Health Day is observed on",
            Options: ['Apr 7', 'Mar 6', 'Mar I5', 'Sept 20'],
            CorrectAnswer: "Apr 7"

        },
        {
            Question: "The first month of the Indian national calendar is",
            Options: ['Magha', 'Chaitra', 'Ashadha', 'Vaishakha'],
            CorrectAnswer: "Chaitra"

        },
        {
            Question: "Which of the following is not a dance from Kerala?",
            Options: ['Kathakali', 'Mohiniattam', 'Ottan Thullal', 'Yaksha Gana'],
            CorrectAnswer: "Monday"

        },
        {
            Question: "Which of the followiing is a folk dance of India?",
            Options: ['Kathakali', 'Mohiniattam', 'Garba', 'Manipuri'],
            CorrectAnswer: "Garba"

        },
        {
            Question: "Which of the-following is wrongly matched?",
            Options: ['Qutab Minar- Delhi', 'Taj Mahal -Agra', 'Ajanta Caves -Maharashtra', 'Charminar -Lucknow'],
            CorrectAnswer: "Charminar -Lucknow"

        },
        {
            Question: "Writers Building is the headquarters of",
            Options: ['The times of India group', 'All India Writers Association', 'West Bengal Government', 'Press Trust of India'],
            CorrectAnswer: "West Bengal Government"

        },
        {
            Question: "Dogri is spoken in which of the following states",
            Options: ['Jammu & Kashmir', 'Bihar', 'Assam', 'Manipur'],
            CorrectAnswer: "Jammu & Kashmir"

        }
    ]


    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState('');
    const [score, setScore] = useState(0);
    const [isQuizCompleted, setIsQuizCompleted] = useState(false);

    const currentQuestion = questionsData[currentQuestionIndex];
    const isLastQuestion = currentQuestionIndex === questionsData.length - 1;

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

    const handleNextClick = () => {
        if (selectedOption === currentQuestion.CorrectAnswer) {
            setScore((prevScore) => prevScore + 2);
        }

        setSelectedOption('');
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    };

    const handleSubmitClick = () => {
        if (selectedOption === currentQuestion.CorrectAnswer) {
            setScore((prevScore) => prevScore + 2);
        }

        setIsQuizCompleted(true);
    };

    const handleRestartClick = () => {
        setCurrentQuestionIndex(0);
        setSelectedOption('');
        setScore(0);
        setIsQuizCompleted(false);
    };

    return (
        <div className={styles.Quiz}>
            <img
                src="./images/quizR.webp"
                alt="pic"
                border="1px solid white"
                width={400}
            />
            <h2>Quiz</h2>
            {isQuizCompleted ? (
                <div className={styles.tag}>
                    <p>Your score: {score} out of {questionsData.length * 2}</p>
                    {score >= 12 ? (
                        <p>Congratulations! You passed the test!</p>
                    ) : (
                        <button onClick={handleRestartClick}>Restart</button>
                    )}
                </div>
            ) : (
                <div className={styles.Question}>
                    <p>Question {currentQuestionIndex + 1} of {questionsData.length}</p>
                    <p>{currentQuestion.Question}</p>
                    <ol>
                        {currentQuestion.Options.map((option, index) => (
                            <li key={index}>
                                <input
                                    type="radio"
                                    id={`option-${index}`}
                                    name="options"
                                    value={option}
                                    checked={selectedOption === option}
                                    onChange={() => handleOptionSelect(option)}
                                />
                                <label htmlFor={`option-${index}`}>{option}</label>
                            </li>
                        ))}
                    </ol>
                    {isLastQuestion ? (
                        <button className={styles.btn} onClick={handleSubmitClick}>Submit</button>
                    ) : (
                        <button className={styles.btn} onClick={handleNextClick}>Next</button>
                    )}
                </div>
            )}
            <Timer/>
        </div>
    );
};