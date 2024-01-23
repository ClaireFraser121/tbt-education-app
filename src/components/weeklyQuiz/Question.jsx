import React from 'react';
import API from '../../utils/API';

function Question(props) {
API.getQuizQuestions()
return (
    <h2 className="question">{props.content}</h2>
);
}

export default Question;