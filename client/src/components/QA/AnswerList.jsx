import React, {useState} from 'react';
import AnswerListEntry from './AnswerListEntry.jsx';
import _ from 'underscore';

const AnswerList = ({answers}) => {

  const [aListSize, setAListSize] = useState(2);
  var answerList = [];

  for (var id in answers) {
    if (answerList.length < aListSize) {
      answerList.push(answers[id]);
    } else {
      break;
    }
  }

  return (
    <ul className='qa_ul'>
      {_.map(answerList, (answer) => {
        return <AnswerListEntry key={answer.id} answer={answer}/>;
      })}
    </ul>
  );
};

export default AnswerList;