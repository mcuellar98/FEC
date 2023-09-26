import React from 'react';
import QAListEntry from './QAListEntry.jsx';
import _ from 'underscore';

const QAList = ({productInfo, questions, setQuestions, qListSize}) => {
  // console.log(questions)
  return (
    <ul className='qa_ul'>
      {_.map(questions.slice(0, qListSize), (question) => {
        return <QAListEntry key={question.question_id} productInfo={productInfo} question={question} setQuestions={setQuestions}/>;
      })}
    </ul>
  );
};

export default QAList;