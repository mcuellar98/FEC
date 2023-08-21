import React, { useState, useEffect } from 'react';

const AddImage = ({img,add,del,id}) => {
  const [ submitted,setS ] = useState(false);
  const [ imgURL,setURL ] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    const input = document.getElementById(id);
    input.click();
    console.log(input)
  }
  const handleDel = (e) => {
    e.preventDefault();
    del(imgURL);
    setS(false);
    setURL('');
  }
  const handleImg = (e) => {
    setS(true);
    setURL(URL.createObjectURL(e.target.files['0']))
    add(URL.createObjectURL(e.target.files['0']))
  }
  return (
    <div id='rAddImages'>
      {submitted ?
      (<div id='rimagediv'><img id='rimage' src={imgURL} /><p id='imgesc' onClick={handleDel}>x</p></div>) :
      (<button id='raddingImg' onClick={handleClick}>+</button>)
      }
      <input type='file' style={{display:'none'}} onChange={handleImg} id={id} accept='image/*'></input>
      </div>
  )
}

export default AddImage