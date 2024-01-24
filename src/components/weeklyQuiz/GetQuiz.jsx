import React, { useEffect, useState } from 'react';
import API from '../../utils/API';
import Quiz from './Quiz';

function GetQuiz() {
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await API.getQuizQuestions();
        const formattedData = data.map((item) => ({
          questionId: item.QuestionID,
          question: item.Question,
          answers: [item.OptionA, item.OptionB, item.OptionC],
          correctAnswer: item.Correct,
        }));
        setQuizQuestions(formattedData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching quiz questions:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <p className="mx-auto max-w-md mt-4">Loading questions...</p>
      ) : (
        <Quiz quizQuestions={quizQuestions} />
      )}
    </div>
  );
}

export default GetQuiz;