import React from 'react';
import QAListEntry from './QAListEntry.jsx';
import _ from 'underscore';

const QAList = ({questions}) => {
  return (
    <ul className='qa_ul'>
      {_.map(questions, (question) => {
        return <QAListEntry key={question.question_id} question={question}/>;
      })}
    </ul>
  );
};

export default QAList;