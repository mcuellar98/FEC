import React from 'react';

const ImageListEntry = ({photo}) => {
  return (
    <li>
      <img src={photo}/>
    </li>
  );
};

export default ImageListEntry;