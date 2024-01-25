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
    // Show start screen
    setLoading(true);
    setShowStartScreen(false);
  };

  const reloadQuiz = () => {
    setQuestionIndex(0);
    setFeedback('');
    setQuizCompleted(false);
    setLoading(true);
    setSelectedAnswer(null);
    setShowStartScreen(true);
  }

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
        <div className="start-screen bg-gradient-to-r from-green-900 via-green-700 to-green-500 text-white p-8 mx-auto w-full">
          <h2 className="mt-12 mb-7 text-3xl font-bold mb-4 text-center">Weekly Quiz</h2>
          <p className="text-center mb-10 mt-8">
            Test your knowledge by trying to answer the following questions. You'll be able to see your score at the end!
          </p>
          <button

            className="bg-yellow-400 mb-20 hover:bg-green-400 text-white font-bold py-2 px-4 rounded mx-auto block"
            onClick={startQuiz}
          >
            Start Quiz
          </button>
        </div>
      )}

      {!showStartScreen && (
        <>
<div className="hero-section bg-gradient-to-r from-green-800 via-green-600 to-green-400 text-white p-8 pb-10 mb-8 flex flex-col md:flex-row items-center">
  <h2 className="text-3xl font-bold mx-auto">Weekly Quiz</h2>
  <button
    className="restart-quiz-btn bg-yellow-400 mb-20 md:mb-0 hover:bg-green-400 text-white font-bold py-2 px-4 rounded"
    onClick={reloadQuiz}
  >
    Restart Quiz
  </button>
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