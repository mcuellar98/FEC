import React from 'react';
import AnswerList from './AnswerList.jsx';

const QAListEntry = ({question}) => {
  return (
    <li>
      <p>{question.asker_name}</p>
      <p>{question.question_body}</p>
      <AnswerList answers={question.answers}/>
    </li>
  );
};

export default QAListEntry;