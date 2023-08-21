import React, {useState, useMemo} from 'react';
import _ from 'underscore';
import {getQuestions, addAnswer} from './../../../fetch.jsx';
import AnswerImageList from './AnswerImageList.jsx';

const AddAnswer = ({product_id, question_id, setQuestions, setAddAnswerVisible}) => {

  const [question, setQuestion] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [imageList, setImageList] = useState([]);
  const [imageFiles, setImageFiles] = useState([]);
  const [imageXVisible, setImageXVisible] = useState(false);

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
        photos: imageList
      };
      addAnswer(question_id, body)
        .then((results)=> {
          return getQuestions(product_id);
        })
        .then((results) => {
          setQuestions(results.data.results);
          setAddAnswerVisible(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  var urlList = [];

  const handleImageChange = () => {
    _.each(event.target.files, (file) => {
      urlList.push(URL.createObjectURL(file));
    });
    var newImageList = imageList.concat(urlList);
    if (newImageList.length > 5) {
      alert('this will be over 5 images');
      urlList = [];
    } else {
      setImageList(newImageList);
      console.log(newImageList);
    }
  };

  const imageMouseEnter = (e) => {
    setImageXVisible(true);
  };

  const imageMouseLeave = (e) => {
    setImageXVisible(false);
  };

  return (
    <div className='add_modal'>
      <p className='exit' onClick={() => { setAddAnswerVisible(false); }}>&times;</p>
      <form>
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
          <input type = "file" name = "upload" accept = "image/*" onChange={handleImageChange} style={{display: 'none'}} multiple/>
        </label>
        <p><small>Please upload up to 5 images.</small></p>
        <AnswerImageList images={imageList} setImageList={setImageList} imageFiles={imageFiles} setImageFiles={setImageFiles}/>
        <button className='modal_button' onClick=
          {handleSubmit}>SUBMIT</button>
      </form>
    </div>
  );
};

export default AddAnswer;