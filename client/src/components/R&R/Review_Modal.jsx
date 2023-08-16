import React, { useState, useEffect } from 'react';

const Review_Modal = ( props ) => {
  const handleExit = (e) => {
    e.preventDefault();
    props.sV(false);
  }
  {/* Please dont judge me too hard if youre reading this code */}
  return (
    <form id='revModal'>
      <div id='revTest'>
        <button id='rExit' onClick={handleExit}> X </button>
        <div id='rform'>
          <p>Overall Rating: </p>
          <div className='crStars'><span value={1}>☆</span><span value={2}>☆</span><span value={3}>☆</span><span value={4}>☆</span><span value={5}>☆</span></div>
          <div id='revRec'>
            <p>Do You Recommend This Product? </p>
            <label id='radioLabels'> Yes: <input name='recommend' type='radio'/> </label>
            <label id='radioLabels'> No: <input name='recommend' type='radio'/> </label>
          </div>
          <div id='revChar'>
            <label id='rchar'><b>Size</b></label>
            <label id='radioLabels'> A size too small: <input value={1} name='size' type='radio'/></label>
            <label id='radioLabels'> ½ a size too small: <input value={2} name='size' type='radio'/></label>
            <label id='radioLabels'> Perfect: <input value={3} name='size' type='radio'/></label>
            <label id='radioLabels'> ½ a size too big: <input value={4} name='size' type='radio'/></label>
            <label id='radioLabels'> A size too wide: <input value={5} name='size' type='radio'/></label>
          </div>
          <div id='revChar'>
            <label id='rchar'><b>Width</b></label>
            <label id='radioLabels'> Too narrow: <input value={1} name='width' type='radio' /></label>
            <label id='radioLabels'> Slightly narrow: <input value={2} name='width' type='radio'/> </label>
            <label id='radioLabels'> Perfect: <input value={3} name='width' type='radio'/> </label>
            <label id='radioLabels'> Slightly wide: <input value={4} name='width' type='radio'/> </label>
            <label id='radioLabels'> Too wide: <input value={5} name='width' type='radio'/> </label>
          </div>
          <div id='revChar'>
            <label id='rchar'><b>Comfort</b></label>
            <label id='radioLabels'> Uncomfortable: <input value={1} name='comfort' type='radio'/></label>
            <label id='radioLabels'> Slightly uncomfortable: <input value={2} name='comfort' type='radio'/></label>
            <label id='radioLabels'> Ok: <input value={3} name='comfort' type='radio'/></label>
            <label id='radioLabels'> Comfortable: <input value={4} name='comfort' type='radio'/></label>
            <label id='radioLabels'> Perfect: <input value={5} name='comfort' type='radio'/></label>
          </div>
          <div id='revChar'>
            <label id='rchar'><b>Quality</b></label>
            <label id='radioLabels'> Runs slightly short: <input value={1} name='quality' type='radio'/></label>
            <label id='radioLabels'> Below average: <input value={2} name='quality' type='radio'/></label>
            <label id='radioLabels'> What I expected: <input value={3} name='quality' type='radio'/></label>
            <label id='radioLabels'> Pretty great: <input value={4} name='quality' type='radio'/></label>
            <label id='radioLabels'> Perfect: <input value={5} name='quality' type='radio'/></label>
          </div>
          <div id='revChar'>
            <label id='rchar'><b>Length</b></label>
            <label id='radioLabels'> Runs Short: <input value={1} name='length' type='radio'/></label>
            <label id='radioLabels'> Runs slightly tight: <input value={2} name='length' type='radio'/> </label>
            <label id='radioLabels'> Perfect: <input value={3} name='length' type='radio'/> </label>
            <label id='radioLabels'> Runs slightly long: <input value={4} name='length' type='radio'/></label>
            <label id='radioLabels'> Runs long: <input value={5} name='length' type='radio'/></label>
          </div>
          <div id='revChar'>
            <label id='rchar'><b>Fit</b></label>
            <label id='radioLabels'> Runs tight: <input value={1}name='fit' type='radio'/></label>
            <label id='radioLabels'> Runs slightly short: <input value={2} name='fit' type='radio'/></label>
            <label id='radioLabels'> Perfect: <input value={3} name='fit' type='radio'/></label>
            <label id='radioLabels'> Runs slightly long: <input value={4} name='fit' type='radio'/></label>
            <label id='radioLabels'> Runs long: <input value={5} name='fit' type='radio'/></label>
          </div>
          <p>Review Summary: </p>
          <input />
          <p>Review: </p>
          <textarea></textarea>
          <div id='nic-email'>
            <div id='rnic'>
              <p>Nickname: </p>
              <input placeholder='Example: jackson11' />
            </div>
            <div id='remail'>
              <p>Email: </p>
              <input type='email' placeholder='Example: jackson11@email.com'/>
            </div>
          </div>
          <button id='rSubmit'>SUBMIT </button>
        </div>
      </div>
    </form>
  )
}

export default Review_Modal;