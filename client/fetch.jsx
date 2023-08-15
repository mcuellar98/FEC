import axios from 'axios';

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

//GET request for Reviews
const getReviewsById = (id) => {
  return axios.get(url + 'reviews', {
    headers: {Authorization: token},
    params: {product_id: id}
  });
};

//PUT request for Reviews
const helpfulReview = (id) => {
  return axios.put(url + `reviews/${id}/report`)
}
const reportReview = (id) => {
  return axios.put(url + `reviews/${id}/helpful`)
}

//GET request for Meta Reviews
const getMetaReviews = (id) => {
  return axios.get(url + 'reviews/meta', {
    headers: {Authorization: token},
    params: {product_id: id}
  });
};

//POST request for Review
const postReview = (id, review /* review should be an object including product_id */) => {
  return axios.post(url + 'reviews', review, headers);
};

//GET request for Questions
const getQuestions = (id) => {
  return axios.get(url + `qa/questions?product_id=${id}`, {
    headers: {Authorization: token}

  });
};

//GET request for Cart

//GET request for Interactions

export {
  getProducts,
  getProductById,
  getReviewsById,
  getMetaReviews,
  postReview,
  getQuestions
};