import React from 'react';
import ImageList from './ImageList.jsx';

const AnswerListEntry = ({answer}) => {
  return (
    <li>
      <p>{answer.answerer_name}</p>
      <p>{answer.body}</p>
      <p>{answer.date}</p>
      <p>Helpful? ({answer.helpfulness})</p>
      <ImageList photos={answer.photos}/>
    </li>
  );
};

export default AnswerListEntry;