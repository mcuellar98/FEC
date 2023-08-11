import React, {useState, useEffect} from 'react';
import Search from './Search.jsx';
import QAList from './QAList.jsx';
import calls from './../../../fetch.jsx';
import axios from 'axios';

const QA = () => {

  const [questions, setQuestions] = useState([]);

  console.log(calls);

  // calls.getQuestions(37319)
  //   .then((results) => {
  //     console.log(results);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  useEffect(() => {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions?product_id=37319', {
      headers: {Authorization: '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'}
    })
      .then((results) => {
        setQuestions(results.data.results);
      });
  }, []);


  return (
    <div>
      <p>Questions And Answers</p>
      <Search/>
      <QAList questions={questions}/>
      <button>More Answered Questions</button>
      <button>Add Question</button>
    </div>
  );
};

export default QA;