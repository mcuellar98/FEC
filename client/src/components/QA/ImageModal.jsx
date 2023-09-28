import React, {useState} from 'react';

const ImageModal = ({photo, setModalVisible}) => {


  return (
    // <div className='add_modal'>
    <img className='image_modal' src={photo} onClick={() => setModalVisible(false)}/>
    // </div>
  );
};

export default ImageModal;