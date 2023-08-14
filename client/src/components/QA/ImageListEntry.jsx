import React from 'react';

const ImageListEntry = ({photo}) => {
  return (
    <img className='answer_img' src={photo}/>
  );
};

export default ImageListEntry;