import React, {useState} from 'react';
import ImageModal from './ImageModal';

const ImageListEntry = ({photo}) => {

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <li className='img_li'>
      <img className='answer_img' src={photo} onClick={() => setModalVisible(true)}/>
      { modalVisible ?
        <div>
          <ImageModal photo={photo} setModalVisible={setModalVisible}/>
          <div className='blur' onClick={() => setModalVisible(false)}></div>
        </div>
        : null}
    </li>
  );
};

export default ImageListEntry;