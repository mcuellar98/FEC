import React, {useState, useEffect} from 'react';
import Search from './Search.jsx';
import QAList from './QAList.jsx';
import fetch from './../../../fetch.jsx';
import axios from 'axios';

const QA = () => {

  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch.getQuestions(37319)
      .then((results) => {
        console.log(results.data.results);
        setQuestions(results.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className='qa'>
      <p>Questions And Answers</p>
      <Search/>
      <QAList questions={questions}/>
      <button>More Answered Questions</button>
      <button>Add Question</button>
    </div>
  );
};

export default QA;