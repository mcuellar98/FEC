import React from 'react';
import QAListEntry from './QAListEntry.jsx';
import _ from 'underscore';

const QAList = ({questions}) => {
  return (
    <ul>QAList
      {_.map(questions, (question) => {
        return <QAListEntry key={question.question_id} question={question}/>;
      })}
    </ul>
  );
};

export default QAList;