import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {getProductById, getStylesById} from './../../../fetch.jsx';

const CompareProducts = ({product_id, overview_product_id}) => {

  const [mainProdInfo, setMainProdInfo] = useState({});
  const [relatedProdInfo, setRelatedProdInfo] = useState({});
  const [mainStyles, setMainStyles] = useState([]);
  const [relatedStyles, setRelatedStyles] = useState([]);

  useEffect(() => {
    getProductById(product_id)
      .then((results) => {
        setMainProdInfo(results.data);
        return getProductById(overview_product_id);
      })
      .then((results) => {
        setRelatedProdInfo(results.data);
        return getStylesById(product_id);
      })
      .then((results) => {
        setMainStyles(results.data.results);
        return getStylesById(overview_product_id);
      })
      .then((results) => {
        setRelatedStyles(results.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [overview_product_id]);

  return (
    <div className='comparison_modal'>
      <p className='comparing_title'>COMPARING</p>
      <table className='comparison_table'>
        <tbody>
          <tr>
            <th>{mainProdInfo.name}</th>
            <th></th>
            <th>{relatedProdInfo.name}</th>
          </tr>
          <tr>
            <td>${mainProdInfo.default_price}</td>
            <td>Price</td>
            <td>${relatedProdInfo.default_price}</td>
          </tr>
          <tr>
            <td>{mainProdInfo.category}</td>
            <td>Category</td>
            <td>{relatedProdInfo.category}</td>
          </tr>
          {/* {/* <tr>
            <td>{mainProdInfo.features[1]}</td>
            <td>Features</td>
            <td>{relatedProdInfo.features[1]}</td>
          </tr> */}
          <tr>
            <td>{mainStyles.length}</td>
            <td>Styles Available</td>
            <td>{relatedStyles.length}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CompareProducts;