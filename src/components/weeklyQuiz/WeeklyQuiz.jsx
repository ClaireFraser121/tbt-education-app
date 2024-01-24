import React, { useEffect, useState } from 'react';
import API from '../../utils/API';

function WeeklyQuiz() {
    const [quizQuestions, setQuizQuestions] = useState([]);

      useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await API.getQuizQuestions();
            // Map through the fetched data to format it correctly
            const formattedData = data.map((item) => ({
              questionId: item.QuestionID,
              question: item.Question,
              answerOptions: [
                { content: item.OptionA, type: 'OptionA' },
                { content: item.OptionB, type: 'OptionB' },
                { content: item.OptionC, type: 'OptionC' },
              ],
              correctAnswer: item.CorrectAnswer,
            }));
            setQuizQuestions(formattedData);
          } catch (error) {
            console.error('Error fetching quiz questions:', error);
          }
        };
      
        fetchData();
      }, []);
      console.log(quizQuestions)
    }

export default WeeklyQuiz;