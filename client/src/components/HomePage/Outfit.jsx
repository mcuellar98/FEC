import { useState, useEffect } from 'react';
import axios from 'axios';

const Outfit = ({product, set}) => {
  const [img, setImg] = useState('');

  const getImages = (id) => {
    return axios.get(process.env.REACT_APP_API_URL + `products/${id}/styles`, {headers: {Authorization: process.env.REACT_APP_TOKEN}});
  };

  useEffect(() => {
    getImages(product.id)
      .then((res)=> {
        if (res.data.results[0]) {
          setImg(res.data.results[0].photos[0].thumbnail_url);
        } else {
          setImg(require('../../assets/no_pic.png'));
        }
      });
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    set(product.id);
  };
  return (
    <div id='prodCard' onClick={handleClick}>
      <div style={{display: 'flex', justifyContent: 'center', width: '100%', height: '80%', overflow: 'hidden'}}><img src={img}/></div>
      <p styles={{display: 'block'}}>{product.name}</p>
    </div>);
};

export default Outfit;