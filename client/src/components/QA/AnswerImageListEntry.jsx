import React from 'react';

const AnswerImageListEntry = ({image, imageList, setImageList, imageFiles}) => {

  const deleteImage = () => {
    var newImageList = [];
    var newFileList = [];
    imageList.forEach((img) => {
      if (img !== image) {
        console.log('delete');
        newImageList.push(img);
      }
    });
    setImageList(newImageList);
  };

  return (
    <li key = {image} className='add_answer_li' >
      <img className='add_answer_image' src={image} onClick={deleteImage}/>
    </li>
  );
};

export default AnswerImageListEntry;