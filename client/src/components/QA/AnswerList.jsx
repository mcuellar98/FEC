import React, {useState} from 'react';
import AnswerListEntry from './AnswerListEntry.jsx';
import _ from 'underscore';

const AnswerList = ({product_id, answers, setQuestions}) => {

  const [aListSize, setAListSize] = useState(2);
  var answerList = [];

  if (Object.keys(answers).length > 0) {
    for (var id in answers) {
      if (answers[id].answerer_name === 'Seller') {
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
  }

  const handleExpand = () => {
    setAListSize(aListSize + 2);
  };

  const handleCollapse = () => {
    setAListSize(2);
  };


  return (
    <div className='answers'>
      <ul className='qa_ul'>
        {_.map(answerList.slice(0, aListSize), (answer) => {
          return <AnswerListEntry key={answer.id} product_id={product_id} answer={answer} setQuestions ={setQuestions}/>;
        })}
      </ul>
      {answerList.length > aListSize ? <p className='see_more_answers' onClick={handleExpand}>See More Answers</p> : null}
      {answerList.length <= aListSize && aListSize > 2 ? <p className='collapse_answers' onClick={handleCollapse}>Collapse Answers</p> : null}
    </div>
  );
};

export default AnswerList;