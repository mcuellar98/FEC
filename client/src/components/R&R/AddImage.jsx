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
    e.preventDefault();
    setSM(false);
  }

  return (
    <div id='rAddImages'>
      {submitted ?
      (<img id='rimage' src={imgURL} />) :
      (<button id='raddingImg' onClick={handleClick}>+</button>)
      }
      {showModal ?
      (
        <div>
          <div id='imgModal'>
            <div id='imginput'>
              <p style={{fontSize:'14px'}}>Input Image URL: </p>
              <input style={{width:'120%'}} placeholder='Example: "https://s.w-x.co/in-cat_in_glasses.jpg"'/>
            </div>
          </div>
          <div style={{width:'100vw',height:'100vh',position:'fixed',transform:'translate(-50%,-50%)'}}onClick={handleExit}></div>
        </div>
      ) : <></>
      }
      </div>
  )
}

export default AddImage