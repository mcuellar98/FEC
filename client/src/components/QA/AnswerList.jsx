import React, {useState} from 'react';
import AnswerListEntry from './AnswerListEntry.jsx';
import _ from 'underscore';

const AnswerList = ({answers, askerName}) => {

  const [aListSize, setAListSize] = useState(2);
  var answerList = [];

  for (var id in answers) {
    if (answerList.length < aListSize) {
      answerList.push(answers[id]);
    } else {
      answerList = _.sortBy(answerList, (answer) => { return -answer.helpfulness; });
      break;
    }
  }

  return (
    <ul className='qa_ul'>
      {_.map(answerList, (answer) => {
        return <AnswerListEntry key={answer.id} answer={answer} askerName={askerName}/>;
      })}
    </ul>
  );
};

export default AnswerList;