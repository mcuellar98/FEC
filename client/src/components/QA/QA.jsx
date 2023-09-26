import React, {useState, useEffect} from 'react';
import Search from './Search.jsx';
import QAList from './QAList.jsx';
import { getQuestions } from '../../../fetch.jsx';
import axios from 'axios';
import _ from 'underscore';
import AddQuestion from './AddQuestion.jsx';

const QA = ({productInfo}) => {

  const [questions, setQuestions] = useState([]);
  const [qListSize, setQListSize] = useState(4);
  const [modalVisible, setModalVisible] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (Object.keys(productInfo).length > 0) {
    getQuestions(productInfo.data.id)
      .then((results) => {
        var questionList = _.sortBy(results.data.results, (q) => { return -q.question_helpfulness; });
        setQuestions(questionList);
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }, [productInfo]);

  const handleExpand = () => {
    setQListSize(qListSize + 2);
  };

  const handleAddQuestion = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <div className='qa'>
      <p id='qa_title'>QUESTIONS & ANSWERS</p>
      {questions.length > 0 || query.length > 0
        ? <Search product_id={productInfo.data.id} setQuestions={setQuestions} setQuery={setQuery} qListSize={qListSize}/>
        : null}
      {questions.length > 0 ?
        <div>
          <QAList productInfo={productInfo} questions={questions} setQuestions={setQuestions} qListSize={qListSize}/>
          {questions.length > qListSize ? <button className='question_button' onClick={handleExpand}>More Answered Questions</button> : null}
          <button className='question_button' onClick = {handleAddQuestion}>Add Question</button>
        </div>
        : <button className='question_button' onClick={handleAddQuestion}>Add Question</button>}
      {modalVisible ?
        <div>
          <AddQuestion productInfo={productInfo} setQuestions={setQuestions} setModalVisible={setModalVisible}/>
          <div className='blur' onClick={handleAddQuestion}></div>
        </div>
        : null}
    </div>
  );
};

export default QA;