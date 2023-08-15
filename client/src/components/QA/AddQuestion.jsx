import React, {useState} from 'react';
import _ from 'underscore';
import {getQuestions, addQuestion} from './../../../fetch.jsx';

const AddQuestion = ({product_id, setQuestions, setModalVisible}) => {

  const [question, setQuestion] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleNameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    var re = new RegExp('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$');
    if (question === '' || nickname === '' || email === '') {
      var payload = '';
      var fields = {
        'Your Question': question,
        'Your Nickname': nickname,
        'Your Email': email};
      for (var key in fields) {
        if (fields[key] === '') {
          payload += `\n\u2022${key}`;
        }
      }
      alert(`The following fields need to be filled: ${payload}`);
    } else if (!re.test(email)) {
      alert('Incorrect format for email');
    } else {
      var params = {
        body: question,
        name: nickname,
        email: email,
        product_id: product_id
      };
      console.log(params);
      addQuestion(params)
        .then(()=> {
          return getQuestions(product_id);
        })
        .then((results) => {
          setQuestions(results.data.results);
          //setModalVisible(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <form className='add_question_modal'>
      <p className='modal_title'>Ask Your Question </p>
      <p className='modal_sub_title'>About {'insert product here'}</p>
      <label>Your Question*
        <textarea maxLength='10000' required onChange={handleQuestionChange}/>
      </label>
      <label>Your Nickname*
        <input placeholder={'Example: jackson11!'} maxLength='60' required onChange={handleNameChange}/>
        <p><small>For privacy reasons, do not use your full name or email address</small></p>
      </label>
      <label>Your email*
        <input placeholder={'Why did you like the product or not?'} maxLength='60' required onChange={handleEmailChange}/>
        <p><small>For authentication reasons, you will not be emailed</small></p>
      </label>
      <button className='modal_button' onClick={handleSubmit}>SUBMIT</button>
    </form>
  );
};

export default AddQuestion;