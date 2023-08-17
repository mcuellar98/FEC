import React, {useState, useEffect} from 'react';
import Search from './Search.jsx';
import QAList from './QAList.jsx';
import { getQuestions } from '../../../fetch.jsx';
import axios from 'axios';
import _ from 'underscore';
import AddQuestion from './AddQuestion.jsx';
import AddAnswer from './AddAnswer.jsx';

const QA = ({product_id}) => {

  const [questions, setQuestions] = useState([]);
  const [qListSize, setQListSize] = useState(4);
  const [modalVisible, setModalVisible] = useState(false);
  const [addAnswerVisible, setAddAnswerVisible] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    getQuestions(product_id)
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

  const handleAddAnswer = () => {
    setAddAnswerVisible(!addAnswerVisible);
  };

  return (
    <div className='qa'>
      <p id='qa_title'>QUESTIONS & ANSWERS</p>
      {questions.length > 0 || query.length > 0
        ? <Search product_id={product_id} setQuestions={setQuestions} setQuery={setQuery} qListSize={qListSize}/>
        : null}
      {questions.length > 0 ?
        <div>
          <QAList product_id={product_id} questions={questions} setQuestions={setQuestions} setAddAnswerVisible={setAddAnswerVisible}/>
          {questions < qListSize ? <button className='question_button' onClick={handleExpand}>More Answered Questions</button> : null}
          <button className='question_button' onClick = {handleAddQuestion}>Add Question</button>
        </div>
        : <button className='question_button' onClick={handleAddQuestion}>Add Question</button>}
      {modalVisible ?
        <div>
          <AddQuestion product_id={product_id} setQuestions={setQuestions} setModalVisible={setModalVisible}/>
          <div className='blur' onClick={handleAddQuestion}></div>
        </div>
        : null}
      {addAnswerVisible ?
        <div>
          <AddAnswer product_id={product_id} setQuestions={setQuestions} setAddAnswerVisible={setAddAnswerVisible}/>
          <div className='blur' onClick={handleAddAnswer}></div>
        </div>
        : null}
    </div>
  );
};

export default QA;