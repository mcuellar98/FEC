import React from 'react';
import AnswerList from './AnswerList.jsx';
import moment from 'moment';

const QAListEntry = ({question}) => {

  var date = moment(question.question_date);

  return (
    <li className='qa_entry'>
      <div className='question'>
        <div className='question_head'>
          <p className='question_text'>Q: {question.question_body}</p>
          <div className='q_helpful'>
            <p className='question_helpful'>Helpful? Yes({question.question_helpfulness})</p>
            <p className='question_spacer'> | </p>
            <p>Add Answer</p>
          </div>
        </div>
        <div className='question_info'>
          <p>by {question. asker_name}, {date.format('MMMM DD, YYYY')}</p>
          <p className='question_spacer'>|</p>
          <p className='question_report'>{question.reported ? 'Reported' : 'Report'}
          </p>
        </div>
      </div>
      <AnswerList answers={question.answers} askerName={question.asker_name}/>
    </li>
  );
};

export default QAListEntry;