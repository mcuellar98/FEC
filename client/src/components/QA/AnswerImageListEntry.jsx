import React from 'react';

const AnswerImageListEntry = ({image, imageList, setImageList}) => {

  const deleteImage = () => {
    var newImageList = [];
    imageList.forEach((img) => {
      if (img !== image) {
        newImageList.push(img);
      }
    });
    setImageList(newImageList);
  };

  return (
    <li key = {image} className='add_answer_li' >
      <img className='add_answer_image' src={image}/>
      <div className='exit_button' onClick={deleteImage}>&times;</div>
    </li>
  );
};

export default AnswerImageListEntry;