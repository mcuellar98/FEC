import React, {useEffect, useState} from 'react';
import ImageList from './ImageList.jsx';
import moment from 'moment';
import _ from 'underscore';
import {markAnswerHelpful, getQuestions} from './../../../fetch.jsx';

const AnswerListEntry = ({product_id, answer, setQuestions}) => {

  var date = moment(answer.date);

  const [allowHelpfulClick, setAllowHelpfulClick] = useState(true);

  const handleHelpfulClick = () => {
    if (allowHelpfulClick) {
      markAnswerHelpful(answer.id)
        .then(() => {
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
    <li className='answer_list_entry'>
      <p className='answer_text'>A: {answer.body}</p>
      <ImageList photos={answer.photos}/>
      <div className='answer_info'>
        {answer.answerer_name === 'Seller' ?
          <p>by <b>Seller</b>, {date.format('MMMM DD, YYYY')}</p> :
          <p>by {answer.answerer_name}, {date.format('MMMM DD, YYYY')}</p>
        }
        <p className='answer_spacer'>|</p>
        <p>Helpful? </p>
        <p className = 'answer_helpful' onClick={handleHelpfulClick}>Yes({answer.helpfulness})</p>
        {/* <p className='answer_spacer'>|</p> */}
        {/* <p className='answer_report' onClick={handleReportClick}>{answer.reported ? 'Reported' : 'Report'}</p> */}
      </div>
    </li>
  );
};

export default AnswerListEntry;