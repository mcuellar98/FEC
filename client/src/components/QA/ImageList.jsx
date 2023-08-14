import React from 'react';
import ImageListEntry from './ImageListEntry.jsx';
import _ from 'underscore';

const ImageList = ({photos}) => {
  return (
    <ul className='qa_ul'>
      {_.map(photos, (photo, index) => {
        return <ImageListEntry key={index} photo = {photo}/>;
      })}
    </ul>
  );
};

export default ImageList;