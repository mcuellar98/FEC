import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';


const ImageView = (props) => {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);

  var handleThumbClick = (index, item) => {
    setCurrentPhoto(index);
  };

  useEffect(() => {

  }, []);

  return (
    <div id='images'>
      <Carousel useKeyboardArrows dynamicHeight
        onClickThumb={handleThumbClick}
        selectedItem={currentPhoto}>
        {props.images.photos.map((p, i) =>
          (
            <div key={i} onClick={() => setFullscreen(true)} className='carousel-img'>
              <img className='carousel-pic'
                src={p.url} />
              <p>Image Title</p>
            </div>
          )
        )}
      </Carousel>
      <div>
        {fullscreen ? (
          <div className='blur' onClick={() => setFullscreen(false)}>
            <div>
              <img className='fullscreen-img'
                src={props.images.photos[currentPhoto].url} />
            </div>
          </div>
        ) : (
          <div>

          </div>
        )}
      </div>
    </div>
  );
};

export default ImageView;