import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';
import { addToCart } from '../../../fetch.jsx';


const ProductSelection = (props) => {
  const [skuID, setskuID] = useState({});
  const [quantity, setQuantity] = useState(-1);
  const [maxQuantity, setMaxQuantity] = useState(-1);
  const [size, setSize] = useState('');

  var skuArray = () => {
    var arr = [];
    for (const property in props.style.skus) {
      arr.push([property, props.style.skus[property]]);
    }
    return arr;
  };
  var availableSizes = () => {
    return skuArray().filter(sku => sku[1].quantity > 0);
  };
  var quantityOptions = () => {
    if (size === '') {
      return;
    }
    var selections = [];
    var amount = Math.min(maxQuantity, 15);
    for (var i = 1; i <= amount; i++) {
      selections.push(
        <option key={i} value={i}>{i}</option>
      );
    }
    return selections;
  };

  var onSizeChange = (e) => {
    setskuID(e.target.value);
    setSize(props.style.skus[e.target.value].size);
    setMaxQuantity(props.style.skus[e.target.value].quantity);
    if (quantity > props.style.skus[e.target.value].quantity) {
      setQuantity(1);
    }
    e.preventDefault();
  };
  var onQuantityChange = (e) => {
    setQuantity(e.target.value);
    e.preventDefault();
  };
  var onAddToCart = () => {
    for (var i = 0; i < quantity; i++) {
      addToCart(skuID).then(result => {
      }).catch((err) => {
        console.log('add to cart error', err);
      });
    }
  };


  return (
    <div id='product-selection'>
      <div id='product-size-and-quantity'>
        {Object.keys(props.style.skus).length === 0 ? (
          <select name='sizes' id='size-selection' disabled>
          </select>
        ) : (
          <select name='sizes'
            id='size-selection'
            defaultValue=""
            onChange={onSizeChange}>
            <option value="" disabled>Select Size</option>
            {availableSizes().map((sku, i) => (
              <option key={i} value={sku[0]} >
                {sku[1].size}
              </option>
            ))}
          </select>
        )}
        <select id='quantity-selection'
          name="quantity"
          defaultValue=""
          onChange={onQuantityChange}>
          <option value="" disabled>-</option>
          {quantityOptions()}
        </select>
      </div>

      <div id="add-to-cart">
        {size !== '' && quantity > 0 ? (
          <div>
            <button id="add-to-cart-btn"
              onClick={onAddToCart}>
              Add to cart</button>
          </div>
        ) : (
          <div>
          </div>
        )}
      </div>


    </div>
  );
};

export default ProductSelection;