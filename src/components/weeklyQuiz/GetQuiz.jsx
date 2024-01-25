import React, { useEffect, useState } from 'react';
import API from '../../utils/API';
import Quiz from './Quiz';

function GetQuiz() {
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  const getQuiz = async () => {
    try {
      setLoading(true);
      const data = await API.getQuizQuestions();
      const formattedData = data.map((item) => ({
        questionId: item.QuestionID,
        question: item.Question,
        answers: [item.OptionA, item.OptionB, item.OptionC],
        correctAnswer: item.Correct,
      }));

         // Shuffle the questions and answers
        const shuffledData = formattedData.sort(() => Math.random() - 0.5);
        setQuizQuestions(shuffledData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching quiz questions:', error);
        setLoading(false);
      }
    };

  useEffect(() => {
    getQuiz();
  }, []);

    return (
      <div>
      {loading ? (
        <p className="mx-auto max-w-md mt-4">Loading quiz...</p>
      ) : (
        <Quiz quizQuestions={quizQuestions} getQuizAgain={getQuiz} />
      )}
    </div>
  );
}

export default GetQuiz;