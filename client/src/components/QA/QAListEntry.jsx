import React, {useState} from 'react';
import AnswerList from './AnswerList.jsx';
import moment from 'moment';
import {markQuestionsHelpful, getQuestions} from './../../../fetch.jsx';

const QAListEntry = ({product_id, question, questions, setQuestions}) => {

  const [allowHelpfulClick, setAllowHelpfulClick] = useState(true);

  var date = moment(question.question_date);

  const handleHelpfulClick = () => {
    if (allowHelpfulClick) {
      markQuestionsHelpful(question.question_id)
        .then((results) => {
          return getQuestions(product_id);
        })
        .then((results) => {
          setQuestions(results.data.results);
          setAllowHelpfulClick(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <li className='qa_entry'>
      <div className='question'>
        <div className='question_head'>
          <p className='question_text'>Q: {question.question_body}</p>
          <div className='q_helpful'>
            <p className='question_helpful'onClick={handleHelpfulClick}>Helpful? Yes({question.question_helpfulness})</p>
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
      <AnswerList product_id={product_id} answers={question.answers} setQuestions={setQuestions}/>
    </li>
  );
};

export default QAListEntry;