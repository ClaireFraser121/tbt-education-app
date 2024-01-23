// Weekly Quiz Page:

// Quiz Questions:
//  Create a set of ten quiz questions based on Black History.
//  Design a layout to present the questions.
// 
// Answer Options:
//  Provide multiple-choice answer options for each question.
//  Ensure a clear and user-friendly format for answering.

// User Interaction:
//  Implement a system to track user answers.
//  Display correct answers after submission.


// Pseudocode
// # Weekly Quiz

// FUNCTION handleAnswer(questionIndex, selectedOption):
//     SET userAnswers[questionIndex] = selectedOption

// # Main component
// FUNCTION QuizPage():
//     SET userAnswers = []

//     PRINT 'Weekly Quiz'
//     FOR EACH question IN quizQuestions:
//         PRINT question.text
//         FOR EACH option IN question.options:
//             BUTTON 'Option', onClick=handleAnswer(questionIndex, option)

//     PRINT 'User\'s Answers:'
//     FOR EACH answer IN userAnswers:
//         PRINT answer

// WeeklyQuiz.jsx
import React from 'react';
import Question from './Question';

const WeeklyQuiz = () => {
return (
    <div>
    <h2>Weekly Quiz</h2>
    <Question content="Who is Barack Obama?" />
    </div>
);
}
export default WeeklyQuiz;
