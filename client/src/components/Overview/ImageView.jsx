import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';


const ImageView = (props) => {
  const [currentPhoto, setCurrentPhoto] = useState(0);


  var handleThumbClick = (index, item) => {
    console.log(index, item);
    //item.style.border = '10px solid blue';
  };

  useEffect(() => {

  }, []);

  console.log(props.images.photos[0].url);
  return (
    <div id='images'>
      <Carousel useKeyboardArrows dynamicHeight
        onClickThumb={handleThumbClick}
        selectedItem={currentPhoto}>
        {props.images.photos.map((p, i) =>
          (
            <div key={i} className='carousel-img'>
              <img className='carousel-pic' src={p.url} />
              <p>Image Title</p>
            </div>
          )
        )}
      </Carousel>
    </div>
  );
};

export default ImageView;