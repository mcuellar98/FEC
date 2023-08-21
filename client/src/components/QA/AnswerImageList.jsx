import React from 'react';
import _ from 'underscore';
import AnswerImageListEntry from './AnswerImageListEntry.jsx';

const AnswerImageList = ({images}) => {
  return (
    <ul className = 'image_list'>
      {_.map(images, (image) => {
        return <AnswerImageListEntry key = {image} image={image}/>;
      })}
    </ul>
  );
};

export default AnswerImageList;