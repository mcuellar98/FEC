import React from 'react';
import _ from 'underscore';
import AnswerImageListEntry from './AnswerImageListEntry.jsx';

const AnswerImageList = ({images, setImageList, imageFiles, setImageFiles}) => {
  return (
    <ul className = 'image_list'>
      {_.map(images, (image) => {
        return <AnswerImageListEntry key = {image} image={image} imageList={images} setImageList={setImageList} imageFiles={imageFiles} setImageFiles={setImageFiles}/>;
      })}
    </ul>
  );
};

export default AnswerImageList;