import React from 'react';
import ImageList from './ImageList.jsx';
import moment from 'moment';

const AnswerListEntry = ({answer, askerName}) => {

  var date = moment(answer.date);

  return (
    <li className='answer_list_entry'>
      <p className='answer_text'>A: {answer.body}</p>
      <ImageList photos={answer.photos}/>
      <div className='answer_info'>
        {answer.answerer_name === askerName ?
          <p>by <b>Seller</b>, {date.format('MMMM DD, YYYY')}</p> :
          <p>by {answer.answerer_name}, {date.format('MMMM DD, YYYY')}</p>
        }
        <p className='answer_spacer'>|</p>
        <p>Helpful? Yes({answer.helpfulness})</p>
        <p className='answer_spacer'>|</p>
        <p>{answer.reported ? 'Reported' : 'Report'}</p>
      </div>
    </li>
  );
};

export default AnswerListEntry;