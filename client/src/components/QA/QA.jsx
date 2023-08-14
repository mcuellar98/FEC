import React, {useState, useEffect} from 'react';
import Search from './Search.jsx';
import QAList from './QAList.jsx';
import { getQuestions } from '../../../fetch.jsx';
import axios from 'axios';
import _ from 'underscore';

const QA = () => {

  const [questions, setQuestions] = useState([]);
  const [qListSize, setQListSize] = useState(4);

  useEffect(() => {
    getQuestions(37323)
      .then((results) => {
        console.log(results.data.results);

        var questionList = _.sortBy(results.data.results, (q) => {
          return -q.question_helpfulness;
        });
        setQuestions(questionList.slice(0, qListSize));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className='qa'>
      <p id='qa_title'>QUESTIONS & ANSWERS</p>
      {questions.length !== 0 ?
        <div>
          <Search/>
          <QAList questions={questions}/>
          <button className='question_button'>More Answered Questions</button>
          <button className='question_button'>Add Question</button>
        </div>
        : <button className='question_button'>Add Question</button>}
    </div>
  );
};

export default QA;