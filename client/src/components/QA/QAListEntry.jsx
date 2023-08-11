import React from 'react';
import AnswerList from './AnswerList.jsx';

const QAListEntry = ({question}) => {
  return (
    <li>
      <p>{question.asker_name}</p>
      <p>{question.question_body}</p>
      <p>Helpful? ({question.question_helpfulness})</p>
      <p>{question.question_date}</p>
      {question.reported ? <p>Reported</p> : <p>Report</p>}
      <AnswerList answers={question.answers}/>
    </li>
  );
};

export default QAListEntry;