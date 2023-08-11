import axios from 'axios';
// import path from 'path';

const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe';
const token = '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';

const headers = {headers: {Authorization: token}};

//GET request for all Products
const getProducts = () => {
  return axios.get(url + '/products', headers);
};

//GET request for Product by ID
const getProductById = (id) => {
  return axios.get(url + `/products/${id}`, headers);
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
  axios.post(url + '/reviews', review, headers);
};

//GET request for Questions
const getQuestions = (id) => {
  return axios.get(url + `/qa/questions?product_id=${id}`, {
    headers: {Authorization: token}
  });
};

//GET request for Cart

//GET request for Interactions

export default {
  getProducts,
  getProductById,
  getReviewsById,
  getMetaReviews,
  postReview,
  getQuestions
};