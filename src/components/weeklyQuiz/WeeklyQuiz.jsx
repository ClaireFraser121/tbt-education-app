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
import React, { useState, useEffect } from 'react';
import API from '../../utils/API';

function WeeklyQuiz() {
    const [quizQuestions, setQuizQuestions] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await API.getQuizQuestions();
            setQuizQuestions(data);
          } catch (error) {
            console.error('Error fetching quiz questions:', error);
          }
        };

        fetchData();
    }, []);

    console.log(quizQuestions);
}
export default WeeklyQuiz;