import React from 'react';
import Search from './Search.jsx';
import QAList from './QAList.jsx';

const QA = () => {
  return (
    <div>
      <h1>Questions And Answers</h1>
      <Search/>
      <QAList/>
      <button>More Answered Questions</button>
      <button>Add Question</button>
    </div>
  );
};

export default QA;