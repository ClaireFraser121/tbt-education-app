import React, { useState, useEffect } from 'react';
import '../../styles/tailwind.css';
import './quiz.css';

const Quiz = ({ quizQuestions, getQuizAgain }) => {
 const [loadingQuestions, setLoadingQuestions] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [showStartScreen, setShowStartScreen] = useState(true);
  const [showQuizScreen, setShowQuizScreen] = useState(false);
  const [showEndScreen, setShowEndScreen] = useState(false);
  const [finalScore, setFinalScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [incorrectQuestions, setIncorrectQuestions] = useState([]);
  

  const startQuiz = () => {
    // Show start screen
    setShowStartScreen(false);
    setShowQuizScreen(true);
  };

  const reloadQuiz = () => {
    setQuestionIndex(0);
    setFeedback('');
    setSelectedAnswer(null);
    setFinalScore(0);
    setIncorrectQuestions([]);
    setShowQuizScreen(false);
    setShowEndScreen(false);
    setShowStartScreen(true);
        // Call the callback function to get quiz questions again
        getQuizAgain();
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
    setShowQuizScreen(false);
    setShowEndScreen(true);
  };

  const handleAnswerClick = (index) => {
    const currentQuestion = quizQuestions[questionIndex];

    if (selectedAnswer === null) {
      if (currentQuestion.answers[index] === currentQuestion.correctAnswer) {
        setFeedback('Correct!');
        setFinalScore((prevScore) => prevScore + 1);
      } else {
        setFeedback('Wrong!');
        setIncorrectQuestions((prevIncorrect) => [...prevIncorrect, currentQuestion]);
      }
    }

    setSelectedAnswer(index);

    setTimeout(() => {
      setQuestionIndex((prevIndex) => prevIndex + 1);
      getQuestion(questionIndex + 1);
    }, 1000);
  };

  useEffect(() => {
      getQuestion(questionIndex);
  }, [questionIndex]);

  return (
    <div>
      {!showEndScreen && showStartScreen && (
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

      {!showStartScreen && showQuizScreen && (
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
          <div className="mb-4 mx-auto max-w-lg">
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
    {!showQuizScreen && showEndScreen && (
        <div className="end-screen bg-gradient-to-r from-green-900 via-green-700 to-green-500 text-white p-8 mx-auto w-full">
          <h2 className="mt-5 mb-7 text-3xl font-bold mb-4 text-center">Quiz Completed</h2>
          <p className="text-center mb-7 mt-8 text-xl">
            Congratulations on completing the quiz!</p>
            <p className="text-center mb-10 mt-2">Your final score is <span className="font-bold text-2xl">{finalScore}</span> out of <span className="font-bold text-2xl">{quizQuestions.length}</span>.</p>
            

<div className="max-w-4xl mx-auto my-auto px-6 py-5 text-center transition duration-300 transform bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
              <p className="font-semibold text-gray-200">
              {incorrectQuestions.length > 0 && (
            <div className="text-center mb-10 mt-8">
              <h3 className="mt-7 mb-7 text-2xl font-bold mb-2 text-center">The questions you got wrong:</h3>
              {incorrectQuestions.map((question, index) => (
                <div key={index} className="mb-2">
                  <p className="mt-5 mb-1">
                    <strong>{index + 1}:</strong> {question.question}
                  </p>
                  <p className="text-green-500 mb-7 font-light">
              Correct Answer: {question.correctAnswer}
            </p>
                </div>
              ))}
            </div>
          )}
              </p>
            </div>

          
            <p className="text-center mb-10 mt-10">You can restart the quiz or do something else.

          </p>
          <button
            className="restart-quiz-btn bg-yellow-400 hover:bg-green-400 text-white font-bold mb-8 py-2 px-4 rounded mx-auto block"
            onClick={reloadQuiz}
          >
            Restart Quiz
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;          