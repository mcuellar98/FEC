import React, {useState} from 'react';
import AnswerListEntry from './AnswerListEntry.jsx';
import _ from 'underscore';

const AnswerList = ({answers, setQuestions}) => {

  const [aListSize, setAListSize] = useState(2);
  var answerList = [];

  for (var id in answers) {
    if (askerName === answers[id].answerer_name) {
      answerList.unshift(answers[id]);
    } else {
      answerList.push(answers[id]);
    }
  }
  if (answerList[0].answerer_name === 'Seller') {
    answerList = [answerList[0]].concat(_.sortBy(answerList, (answer) => { return -answer.helpfulness; }));
  } else {
    answerList = _.sortBy(answerList, (answer) => { return -answer.helpfulness; });
  }

  return (
    <ul className='qa_ul'>
      {_.map(answerList.slice(0, aListSize), (answer) => {
        return <AnswerListEntry key={answer.id} answer={answer} setQuestions ={setQuestions}/>;
      })}
    </ul>
  );
};

export default AnswerList;