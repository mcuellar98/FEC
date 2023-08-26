import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import {getProductById, getStylesById, getReviewsById} from './../../../fetch.jsx';
import {partFilled} from './../R&R/Helper.jsx';
import CompareProducts from './CompareProducts.jsx';

const RLCard = ({product_id, overview_product_id, productInfo, setProductId, setCanAddOutfit}) => {

  const [product, setProduct] = useState({});
  const [cardImage, setCardImage] = useState('');
  const [averageReview, setAverageReivew] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const canChangeId = useRef(true);

  useEffect(() => {
    getProductById(product_id)
      .then((result) => {
        setProduct(result.data);
        return getStylesById(product_id);
      })
      .then((result) => {
        if (result.data.results[0].photos[0].thumbnail_url === null) {
          setCardImage(require('./../../assets/no_pic.png'));
        } else {
          setCardImage(result.data.results[0].photos[0].thumbnail_url);
        }
        return getReviewsById(product_id);
      })
      .then((result) => {
        var sum = 0;
        result.data.results.forEach((obj) => {
          sum += obj.rating;
        });
        setAverageReivew(sum / result.data.results.length);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [product_id]);

  const openComparisonModal = (e) => {
    e.stopPropagation();
    setModalVisible(true);
  };

  const changeProductId = (e) => {
    if (canChangeId.current) {
      setProductId(product_id);
      setCanAddOutfit(true);
    }
  };

  return (
    <div id='product_id' className='rl_card' onClick={changeProductId}>
      <span className="rl_card_star" onClick={openComparisonModal}>★</span>
      <img className = 'rl_card_image' src={cardImage}/>
      <div className='rl_card_text'>
        <p className='rl_card_category'>Category: {product.category}</p>
        <p className='rl_card_name'>{product.name}</p>
        <p className='rl_card_price'>${product.default_price}</p>
        {partFilled(averageReview)}
      </div>
      {modalVisible ?
        <div>
          <CompareProducts product_id={product_id} relatedProductInfo={product} mainProductInfo={productInfo} overview_product_id={overview_product_id} setModalVisible={setModalVisible}/>
          <div className='blur' onClick={(e) => { e.stopPropagation(); setModalVisible(false); }}></div>
        </div> : null}
    </div>
  );
};

export default RLCard;