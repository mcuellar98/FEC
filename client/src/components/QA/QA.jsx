import React, {useState, useEffect} from 'react';
import Search from './Search.jsx';
import QAList from './QAList.jsx';
import { getQuestions } from '../../../fetch.jsx';
import axios from 'axios';
import _ from 'underscore';
import AddQuestion from './AddQuestion.jsx';

const QA = () => {

  const [questions, setQuestions] = useState([]);
  const [qListSize, setQListSize] = useState(4);
  const [modalVisible, setModalVisible] = useState(false);

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

  const handleExpand = () => {
    setQListSize(qListSize + 2);
  };

  const handleAddQuestion = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <div className='qa'>
      <p id='qa_title'>QUESTIONS & ANSWERS</p>
      {questions.length !== 0 ?
        <div>
          <Search/>
          <QAList questions={questions} setQuestions={setQuestions}/>
          {questions < qListSize ? <button className='question_button' onClick={handleExpand}>More Answered Questions</button> : null}
          <button className='question_button' onClick = {handleAddQuestion}>Add Question</button>
        </div>
        : <button className='question_button' onClick={handleAddQuestion}>Add Question</button>}
      {modalVisible ? <AddQuestion/> : null}
    </div>
  );
};

export default QA;