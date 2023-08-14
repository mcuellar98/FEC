import React from 'react';

const ImageListEntry = ({photo}) => {
  return (
    <li>
      <img className='answer_img' src={photo}/>
    </li>
  );
};

export default ImageListEntry;