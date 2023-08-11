import React from 'react';
import AnswerListEntry from './AnswerListEntry.jsx';
import _ from 'underscore';

const AnswerList = ({answers}) => {
  return (
    <ul className='qa_ul'>
      {_.map(answers, (answer) => {
        return <AnswerListEntry key={answer.id} answer={answer}/>;
      })}
    </ul>
  );
};

export default AnswerList;