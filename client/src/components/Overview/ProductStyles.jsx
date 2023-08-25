import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';


const ProductStyles = (props) => {


  return (
    <div id='product-styles'>
      <div>
        <p><b>Style {` >`}</b> {props.styles[props.style].name}</p>
      </div>
      <div id='style-selection'>
        {props.styles.map((s, i) => (
          <StyleTile key={i}
            style={s}
            selected={i === props.style}
            setStyle={() => props.setStyleIndex(i)}/>
        ))}
      </div>
    </div>
  );
};

const StyleTile = (props) => {

  return (
    <div className='style-tile'>
      <img className={`style-tile-thumb ${props.selected ? 'style-thumb-selected' : ''}`}
        alt={props.style.name}
        src={props.style.photos[0].thumbnail_url}
        onClick={props.setStyle} />
    </div>
  );
};

export default ProductStyles;