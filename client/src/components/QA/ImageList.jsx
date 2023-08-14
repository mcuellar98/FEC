import React from 'react';
import ImageListEntry from './ImageListEntry.jsx';
import _ from 'underscore';

const ImageList = ({photos}) => {
  return (
    <div className='qa_ul image_container'>
      {_.map(photos, (photo, index) => {
        return <ImageListEntry key={index} photo = {photo}/>;
      })}
    </div>
  );
};

export default ImageList;