import React, {useState} from 'react';
import AnswerList from './AnswerList.jsx';
import AddAnswer from './AddAnswer.jsx';
import moment from 'moment';
import {markQuestionsHelpful, getQuestions, reportQuestion} from './../../../fetch.jsx';

const QAListEntry = ({productInfo, question, setQuestions}) => {

  const [allowHelpfulClick, setAllowHelpfulClick] = useState(true);
  const [addAnswerVisible, setAddAnswerVisible] = useState(false);
  const [reported, setReported] = useState(question.reported);

  var date = moment(question.question_date);

  const handleAddAnswer = () => {
    setAddAnswerVisible(!addAnswerVisible);
  };

  const handleHelpfulClick = () => {
    if (allowHelpfulClick) {
      markQuestionsHelpful(question.question_id)
        .then((results) => {
          return getQuestions(productInfo.data.id);
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

  const handleReportClick = () => {
    if (!reported) {
      reportQuestion(question.question_id)
        .then((result) => {
          setReported(true);
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
            <p className='helpful'>Helpful?</p>
            <p data-testid='question_helpful' className='question_helpful' onClick={handleHelpfulClick}>Yes({question.question_helpfulness})</p>
            <p className='question_spacer'> | </p>
            <p data-testid='add_answer' className='add_answer' onClick={handleAddAnswer}>Add Answer</p>
            <p className='answer_spacer'>|</p>
            <p data-testid='question_report' className='answer_report' onClick={handleReportClick}>{reported ? 'Reported' : 'Report'}</p>
          </div>
        </div>
        <div className='question_info'>
          <p className="question_author">by {question. asker_name}, {date.format('MMMM DD, YYYY')}</p>
          <p className='question_spacer'>|</p>
          <p className='question_report'>{question.reported ? 'Reported' : 'Report'}
          </p>
        </div>
      </div>
      <AnswerList product_id={productInfo.data.id} answers={question.answers} setQuestions={setQuestions}/>
      {addAnswerVisible ?
        <div>
          <AddAnswer productInfo={productInfo} question_id={question.question_id} setQuestions={setQuestions} setAddAnswerVisible={setAddAnswerVisible} question_body={question.question_body}/>
          <div className='blur' onClick={handleAddAnswer}></div>
        </div>
        : null}
    </li>
  );
};

export default QAListEntry;