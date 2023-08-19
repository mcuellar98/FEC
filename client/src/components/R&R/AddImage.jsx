import React, { useState, useEffect } from 'react';

const AddImage = () => {
  const [ submitted,setS ] = useState(false);
  const [ showModal, setSM ] = useState(false);
  const [ imgURL,setURL ] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    setSM(true);
  }
  const handleExit = (e) => {
    if (e.target.keyCode === 13) {
      e.preventDefault();
    } else {
      setSM(false);
    }
  }
  const handleChange = (e) => {
    setURL(e.target.value);
    const input = document.getElementById('rimgurl');
    input.addEventListener("keypress", (event) => {
      if (event.keyCode === 13) {
        e.preventDefault();
        setSM(false);
        setS(true);
        return false;
      }
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setSM(false);
    setS(true);
  }
  const handleDel = (e) => {
    e.preventDefault();
    setS(false);
    setURL('');
  }
  return (
    <div id='rAddImages'>
      {submitted ?
      (<div id='rimagediv'><img id='rimage' src={imgURL} /><p id='imgesc' onClick={handleDel}>x</p></div>) :
      (<button id='raddingImg' onClick={handleClick}>+</button>)
      }
      {showModal ?
      (
        <div>
          <div id='imgModal'>
            <p style={{fontSize:'14px',marginLeft:'10px'}}>Input Image URL: </p>
            <div id='imginput'>
              <input id='rimgurl' style={{width:'90%'}} onChange={handleChange} placeholder='Example: "https://s.w-x.co/in-cat_in_glasses.jpg"'/>
              <button id='rimgurlenter' onClick={handleSubmit}>Submit</button>
            </div>
          </div>
          <div style={{width:'100vw',height:'100vh',position:'fixed',transform:'translate(-50%,-50%)'}} onClick={handleExit}></div>
        </div>
      ) : <></>
      }
      </div>
  )
}

export default AddImage