import { useState, useEffect } from 'react';
import axios from 'axios';
import Outfit from './Outfit.jsx'

const HomePage = ({set}) => {
  const [ products,setProducts ] = useState([]);
  const [ pageNum,setPageN ] = useState(1);

  const gettingProducts = () => {
    return axios.get(process.env.API_URL + 'products', {headers: {Authorization: process.env.TOKEN}, params: {page: pageNum,count:20}})
  }

  useEffect(() => {
    console.log(pageNum)
    gettingProducts()
      .then((res) => {
        setProducts(res.data)
      })
  },[pageNum]);

  const handleClick = (e,value) => {
    e.preventDefault();
    setPageN(value);

  }
  const goNext = (e) => {
    setPageN(pageNum + 1);
  }
  const goBack = (e) => {
    setPageN(pageNum - 1);
  }
  return (
    <div style={{textAlign:'center'}}>
      <div id='homepage'>
        {products.map((product) => {
          return (<Outfit key={product.id} product={product} set={set}/>)
        })}
      </div>
      <div id='pages'>
        {(pageNum === 1) ?
        (<></>) : (<u onClick={goNext}>&#60;</u>) }
        <u id='page1' onClick={(e)=>{handleClick(e,1)}}>1</u>
        <u id='page2' onClick={(e)=>{handleClick(e,2)}}>2</u>
        <u id='page3' onClick={(e)=>{handleClick(e,3)}}>3</u>
        <u id='page4' onClick={(e)=>{handleClick(e,4)}}>4</u>
        <u id='page5' onClick={(e)=>{handleClick(e,5)}}>5</u>
        {(pageNum === 5) ?
        (<></>):(<u onClick={goBack}>&#62;</u>)}
      </div>
    </div>
  )
}

export default HomePage;