import React, {useState, useMemo} from 'react';
import _ from 'underscore';
import {getQuestions, addAnswer} from './../../../fetch.jsx';

const AddAnswer = ({product_id, question_id, setQuestions, setAddAnswerVisible}) => {

  const [question, setQuestion] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [imageList, setImageList] = useState([]);
  const [urlList, setUrlList] = useState([]);

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
        photos: urlList
      };
      addAnswer(question_id, body)
        .then((results)=> {
          console.log(results);
          return getQuestions(product_id);
        })
        .then((results) => {
          console.log(results.data.results);
          setQuestions(results.data.results);
          setAddAnswerVisible(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleImageChange = (e) => {
    if (event.target.files && event.target.files[0]) {
      console.log(event.target.files[0]);
      console.log(URL.createObjectURL(event.target.files[0]));
      setUrlList(urlList.concat(URL.createObjectURL(event.target.files[0])));
      setImageList(imageList.concat(URL.createObjectURL(event.target.files[0])));
      var fileURL = event.target.files[0] && URL.createObjectURL(event.target.files[0]);
      console.log('file url', fileURL);
    }
  };

  return (
    <form className='add_modal'>
      <p className='modal_title'>Submit your Answer</p>
      <p className='modal_sub_title'>{'insert product name and question body here'}</p>
      <label>Your Answer*
        <textarea maxLength='10000' required onChange={handleQuestionChange}/>
      </label>
      <label>What is your nickname*
        <input placeholder={'Example: jack543!'} maxLength='60' required onChange={handleNameChange}/>
        <p><small>For privacy reasons, do not use your full name or email address</small></p>
      </label>
      <label>Your email*
        <input placeholder={'Example: jack@email.com'} maxLength='60' required onChange={handleEmailChange}/>
        <p><small>For authentication reasons, you will not be emailed</small></p>
      </label>
      <label className="add_images_button"> Add Images
        <input type = "file" name = "upload" accept = "image/*" onChange={handleImageChange} style={{display: 'none'}}/>
      </label>
      <ul className = 'image_list'>
        {_.map(imageList, (image) => {
          return <li key={image} className='add_answer_li' >
            <img className='add_answer_image' src={image}/>
          </li>;
        })}
      </ul>
      {/* <div>Image Container
        <img src={imgURL}></img>
      </div> */}
      <button className='modal_button' onClick=
        {handleSubmit}>SUBMIT</button>
    </form>
  );
};

export default AddAnswer;