import React, { useState, useEffect } from 'react';
import '../../styles/tailwind.css';
import './quiz.css';

const Quiz = ({ quizQuestions }) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showStartScreen, setShowStartScreen] = useState(true);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const startQuiz = () => {
    setShowStartScreen(false);
    setLoading(true);
    // Other initialization logic here
  };

  const getQuestion = (index) => {
    if (index < quizQuestions.length) {
      setQuestionIndex(index);
      setFeedback('');
      setSelectedAnswer(null);
    } else {
      endQuiz();
    }
  };

  const endQuiz = () => {
    setQuizCompleted(true);
  };

  const handleAnswerClick = (index) => {
    const currentQuestion = quizQuestions[questionIndex];

    if (selectedAnswer === null) {
      if (currentQuestion.answers[index] === currentQuestion.correctAnswer) {
        setFeedback('Correct!');
      } else {
        setFeedback('Wrong!');
      }
    }

    setSelectedAnswer(index);

    setTimeout(() => {
      setQuestionIndex((prevIndex) => prevIndex + 1);
      getQuestion(questionIndex + 1);
    }, 1000);
  };

  useEffect(() => {
    setLoading(true);

    if (quizCompleted) {
      // Handle what to do when the quiz is completed
    } else {
      getQuestion(questionIndex);
      setLoading(false);
    }
  }, [quizCompleted, questionIndex]);

  return (
    <div>
      {showStartScreen && (
        <div className="start-screen bg-gray-800 text-white p-8 mx-auto w-full">
          <h2 className="mt-5 mb-5 text-3xl font-bold mb-4 text-center">Weekly Quiz</h2>
          <p className="text-center mb-10">
            Test your knowledge by trying to answer the following questions. You'll be able to see your score at the end!
          </p>
          <button
            className="bg-blue-500 mb-8 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-auto block"
            onClick={startQuiz}
          >
            Start Quiz
          </button>
        </div>
      )}

      {!showStartScreen && (
        <>
          {/* Render your quiz UI here */}
          <div className="hero-section bg-gray-800 text-white p-8 mb-8 text-center">
            <h2 className="text-3xl font-bold mb-4 mx-auto max-w-md">Weekly Quiz</h2>
          </div>
          <div className="mb-4 mx-auto max-w-md">
            {quizQuestions[questionIndex] && (
              <>
                <h3 className="text-2xl font-bold mb-7">{quizQuestions[questionIndex].question}</h3>
                <form>
                  {quizQuestions[questionIndex].answers.map((answer, index) => (
                    <div key={index} className="mb-5">
                      <input
                        className="radioCustomButton"
                        type="radio"
                        id={`answer-${index}`}
                        name="answer"
                        onChange={() => handleAnswerClick(index)}
                        checked={selectedAnswer === index}
                        disabled={selectedAnswer !== null}
                      />
                      <label className="radioCustomLabel" htmlFor={`answer-${index}`}>{answer}</label>
                    </div>
                  ))}
                </form>
              </>
            )}
          </div>
          <p className="mx-auto max-w-md mt-8">Feedback:</p>
          <p className="mb-10 mx-auto max-w-md">{feedback}</p>
        </>
      )}
    </div>
  );
};

export default Quiz;
