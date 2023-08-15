import React, {useEffect} from 'react';
import ImageList from './ImageList.jsx';
import moment from 'moment';
import _ from 'underscore';
import {markAnswerHelpful, getQuestions} from './../../../fetch.jsx';

const AnswerListEntry = ({product_id, answer, setQuestions}) => {

  // console.log(answer);

  var date = moment(answer.date);
  const updateQuestionsOnce = _.once(setQuestions);

  const handleHelpfulClick = () => {
    markAnswerHelpful(answer.id)
      .then(() => {
        return getQuestions(product_id);
      })
      .then((results) => {
        updateQuestionsOnce(results.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const handleReportClick = () => {
  //   console.log(Object.keys(answer));
  //   console.log(answer.reported);
  //   //answer.reported = !answer.reported;
  //   getQuestions(37323)
  //     .then((results) => {
  //       setQuestions(results.data.results);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

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
        <p className = 'answer_helpful' onClick={handleHelpfulClick}>Helpful? Yes({answer.helpfulness})</p>
        {/* <p className='answer_spacer'>|</p> */}
        {/* <p className='answer_report' onClick={handleReportClick}>{answer.reported ? 'Reported' : 'Report'}</p> */}
      </div>
    </li>
  );
};

export default AnswerListEntry;