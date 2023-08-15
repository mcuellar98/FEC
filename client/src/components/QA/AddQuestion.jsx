import React from 'react';

const AddQuestion = () => {
  return (
    <form className='add_question_modal'>
      <p className='modal_title'>Ask Your Question </p>
      <p className='modal_sub_title'>About {'insert product here'}</p>
      <label>Your Question*
        <textarea/>
      </label>
      <label>Your Nickname*
        <input placeholder={'Example: jackson11!'}/>
        <p>For privacy reasons, do not use your full name or email address</p>
      </label>
      <label>Your email*
        <input placeholder={'Why did you like the product or not?'}/>
        <p>For authentication reasons, you will not be emailed</p>
      </label>
      <button>Submit</button>
    </form>
  );
};

export default AddQuestion;