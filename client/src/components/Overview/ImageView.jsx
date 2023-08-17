import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';


const ImageView = (props) => {
  const [currentPhoto, setCurrentPhoto] = useState(0);

  const imgStyle = {
  };

  useEffect(() => {

  }, []);

  console.log(props.images.photos[0].url);
  return (
    <div id='images'>
      <Carousel width='90%' useKeyboardArrows>
        {props.images.photos.map((p, i) =>
          (
            <div key={i}>
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