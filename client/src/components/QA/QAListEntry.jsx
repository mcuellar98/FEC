import React from 'react';
import AnswerList from './AnswerList.jsx';

const QAListEntry = ({question}) => {
  return (
    <li className='qa_entry'>
      <div className='question'>
        <div className='question_head'>
          <p className='question_text'>Q: {question.question_body}</p>
          <div className='q_helpful'>
            <p>Helpful? Yes({question.question_helpfulness})</p>
            <p className='question_spacer'> | </p>
            <p>Add Answer</p>
          </div>
        </div>
        <div className='question_info'>
          <p >by {question. asker_name}, {question.question_date}</p>
          <p className='question_spacer'>|</p>
          <p>{question.reported ? 'Reported' : 'Report'}
          </p>
        </div>

      </div>
      <AnswerList answers={question.answers}/>
    </li>
  );
};

export default QAListEntry;