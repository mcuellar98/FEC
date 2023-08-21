import React from 'react';
import QAListEntry from './QAListEntry.jsx';
import _ from 'underscore';

const QAList = ({product_id, questions, setQuestions, qListSize}) => {
  return (
    <ul className='qa_ul'>
      {_.map(questions.slice(0, qListSize), (question) => {
        return <QAListEntry key={question.question_id} product_id={product_id} question={question} setQuestions={setQuestions}/>;
      })}
    </ul>
  );
};

export default QAList;