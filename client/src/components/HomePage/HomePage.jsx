import { useState, useEffect } from 'react';
import axios from 'axios';
import Outfit from './Outfit.jsx'

const HomePage = ({pageNum,set}) => {
  const [ products,setProducts ] = useState([]);


  const gettingProducts = () => {
    return axios.get(process.env.API_URL + 'products', {headers: {Authorization: process.env.TOKEN}, params: {page: pageNum,count:20}})
  }

  useEffect(() => {
    gettingProducts()
      .then((res) => {
        setProducts(res.data)
      })
  },[]);

  return (
    <div id='homepage'>
        {products.map((product) => {
          return (<Outfit key={product.id} product={product} set={set}/>)
        })}
      </div>
  )
}

export default HomePage;