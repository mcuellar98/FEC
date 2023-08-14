import axios from 'axios';
// import path from 'path';

const url = process.env.API_URL;
const token = process.env.TOKEN;

const headers = {headers: {Authorization: token}};

//GET request for all Products
const getProducts = () => {
  return axios.get(url + '/products', headers);
};

//GET request for Product by ID
const getProductById = (id) => {
  return axios.get(url + `/products/${id}`, headers);
};

const getStylesById = (id) => {
  return axios.get(url + `/products/${id}/styles`, headers);
};

//GET request for Reviews
const getReviewsById = (id) => {
  axios.get(url + '/reviews', {
    headers: {Authorization: token},
    params: {id: id}
  });
};

//GET request for Meta Reviews
const getMetaReviews = (id) => {
  axios.get(url + '/reviews/meta', {
    headers: {Authorization: token},
    params: {id: id}
  });
};

//POST request for Review
const postReview = (id, review /* review should be an object including product_id */) => {
  axios.post(url + 'reviews', review, headers);
};

//GET request for Questions
const getQuestions = () => {
  axios.get(url, '/qa/questions '/*, {params}*/);
};

//GET request for Cart

//GET request for Interactions

export {
  getProducts,
  getProductById,
  getStylesById,
  getReviewsById,
  getMetaReviews,
  postReview,
  getQuestions
};