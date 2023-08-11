import React from 'react';

const AnswerListEntry = ({answer}) => {
  return (
    <li>
      <p>{answer.answerer_name}</p>
      <p>{answer.body}</p>
    </li>
  );
};

export default AnswerListEntry;