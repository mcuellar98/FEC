import React from 'react';

const AnswerImageListEntry = ({image}) => {
  return (
    <li key = {image} className='add_answer_li' >
      {/* {imageXVisible ? <p className='remove_image'>&times;</p> : null} */}
      <img className='add_answer_image' src={image}/>
    </li>
  );
};

export default AnswerImageListEntry;