import React from 'react';
import ImageList from './ImageList.jsx';
import { formatDistanceToNow, parseISO } from 'date-fns';

const AnswerListEntry = ({answer}) => {
  return (
    <li className='answer_list_entry'>
      <p className='answer_text'>A: {answer.body}</p>
      <ImageList photos={answer.photos}/>
      <div className='answer_info'>
        <p>by {answer.answerer_name}, {formatDistanceToNow(parseISO(answer.date))}</p>
        <p className='answer_spacer'>|</p>
        <p>Helpful? Yes({answer.helpfulness})</p>
        <p className='answer_spacer'>|</p>
        <p>{answer.reported ? 'Reported' : 'Report'}</p>
      </div>
    </li>
  );
};

export default AnswerListEntry;