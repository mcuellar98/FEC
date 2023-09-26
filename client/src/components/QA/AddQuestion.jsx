import React, {useState, useEffect} from 'react';
import _ from 'underscore';
import {getQuestions, addQuestion} from './../../../fetch.jsx';

const AddQuestion = ({productInfo, setQuestions, setModalVisible}) => {

  const [question, setQuestion] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [productName, setProductName] = useState('');

  useEffect(() => {
    setProductName(productInfo.data.name);
  }, [productInfo]);

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
      var body = {
        body: question,
        name: nickname,
        email: email,
        product_id: productInfo.data.id
      };
      console.log('MADE IT HERE')
      addQuestion(body)
        .then((results)=> {
          return getQuestions(productInfo.data.id);
        })
        .then((results) => {
          setQuestions(results.data.results);
          setModalVisible(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className='add_modal'>
      <p data-testid='exit' className='exit' onClick={() => { setModalVisible(false); }}>&times;</p>
      <form>
        <h1 className='modal_title'>Ask Your Question </h1>
        <h2 className='modal_sub_title'>About {productName}</h2>
        <label>Your Question*
          <textarea data-testid='question' maxLength='10000' required onChange={handleQuestionChange}/>
        </label>
        <label>What is your nickname*
          <input data-testid='nickname' placeholder={'Example: jackson11!'} maxLength='60' required onChange={handleNameChange}/>
          <p><small>For privacy reasons, do not use your full name or email address</small></p>
        </label>
        <label>Your email*
          <input data-testid='email' placeholder={'Why did you like the product or not?'} maxLength='60' required onChange={handleEmailChange}/>
          <p><small>For authentication reasons, you will not be emailed</small></p>
        </label>
        <button data-testid='submit' className='modal_button' onClick={handleSubmit}>SUBMIT</button>
      </form>
    </div>
  );
};

export default AddQuestion;