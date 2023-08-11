import React from 'react';
import QAListEntry from './QAListEntry.jsx';
import _ from 'underscore';

const QAList = ({questions}) => {
  return (
    <ul>QAList
      {_.map(questions, (question) => {
        return <QAListEntry question={question}/>;
      })}
    </ul>
  );
};

export default QAList;