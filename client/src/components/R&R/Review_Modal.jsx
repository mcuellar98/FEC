import React, { useState, useEffect } from 'react';

const Review_Modal = ( props ) => {
  const [ rating,setRating ] = useState(0);
  const [ chars,setChars ] = useState([]);
  const [ summary,setSummary ] = useState('');
  const [ rev,setRev ] = useState('');
  const [ num, setNum ] = useState('Minimum required characters left: 50')

  useEffect(() => {
    var characteristics = Object.keys(props.meta.characteristics)
    setChars(characteristics);
  },[props.meta])

  const handleExit = (e) => {
    e.preventDefault();
    props.sV(false);
  }
  const handleStar = (e,value) => {
    e.preventDefault();
    for (var i = 5; i > value; i--) {
      var el = document.getElementById(i);
      el.textContent = '☆';
    }
    for (var i = value; i > 0; i--) {
      var el = document.getElementById(i);
      el.textContent = '★';
    }
    setRating(value);
  }
  const handleSummary = (e) => {
    e.preventDefault();
    setSummary(e.target.value)
  }
  const handleReview = (e) => {
    e.preventDefault();
    setRev(e.target.value)
    if (e.target.value.length < 50) {
      setNum(`Minimum required characters left: ${50 - e.target.value.length}`)
    } else {
      setNum('Minimum Reached')
    }
  }

  {/* Please dont judge me too hard if youre reading this code */}
  return (
    <form id='revModal'>
      <div id='revTest'>
        <button id='rExit' onClick={handleExit}> X </button>
        <div id='rform'>
        <p> Overall Rating: </p>
          <div id='crStars'>
            <span id={1} onClick={(e) => {handleStar(e,1)}}>☆</span><span id={2} onClick={(e) => {handleStar(e,2)}}>☆</span><span id={3} onClick={(e) => {handleStar(e,3)}}>☆</span><span id={4} onClick={(e) => {handleStar(e,4)}}>☆</span><span id={5} onClick={(e) => {handleStar(e,5)}}>☆</span>
          </div>
          <div id='revRec'>
            <p>Do You Recommend This Product? </p>
            <label id='radioLabels'> Yes: <input name='recommend' type='radio'/> </label>
            <label id='radioLabels'> No: <input name='recommend' type='radio'/> </label>
          </div>
          {(chars.includes('Size')) ? (<div id='revChar'>
            <label id='rchar'><b>Size</b></label>
            <label id='radioLabels'> A size too small: <input value={1} name='size' type='radio'/></label>
            <label id='radioLabels'> ½ a size too small: <input value={2} name='size' type='radio'/></label>
            <label id='radioLabels'> Perfect: <input value={3} name='size' type='radio'/></label>
            <label id='radioLabels'> ½ a size too big: <input value={4} name='size' type='radio'/></label>
            <label id='radioLabels'> A size too wide: <input value={5} name='size' type='radio'/></label>
          </div>) : (<></>)}
          {(chars.includes('Width')) ? (<div id='revChar'>
            <label id='rchar'><b>Width</b></label>
            <label id='radioLabels'> Too narrow: <input value={1} name='width' type='radio' /></label>
            <label id='radioLabels'> Slightly narrow: <input value={2} name='width' type='radio'/> </label>
            <label id='radioLabels'> Perfect: <input value={3} name='width' type='radio'/> </label>
            <label id='radioLabels'> Slightly wide: <input value={4} name='width' type='radio'/> </label>
            <label id='radioLabels'> Too wide: <input value={5} name='width' type='radio'/> </label>
          </div>) : (<></>)}
          {(chars.includes('Comfort')) ? (<div id='revChar'>
            <label id='rchar'><b>Comfort</b></label>
            <label id='radioLabels'> Uncomfortable: <input value={1} name='comfort' type='radio'/></label>
            <label id='radioLabels'> Slightly uncomfortable: <input value={2} name='comfort' type='radio'/></label>
            <label id='radioLabels'> Ok: <input value={3} name='comfort' type='radio'/></label>
            <label id='radioLabels'> Comfortable: <input value={4} name='comfort' type='radio'/></label>
            <label id='radioLabels'> Perfect: <input value={5} name='comfort' type='radio'/></label>
          </div>) : (<></>)}
          {(chars.includes('Quality')) ? (<div id='revChar'>
            <label id='rchar'><b>Quality</b></label>
            <label id='radioLabels'> Runs slightly short: <input value={1} name='quality' type='radio'/></label>
            <label id='radioLabels'> Below average: <input value={2} name='quality' type='radio'/></label>
            <label id='radioLabels'> What I expected: <input value={3} name='quality' type='radio'/></label>
            <label id='radioLabels'> Pretty great: <input value={4} name='quality' type='radio'/></label>
            <label id='radioLabels'> Perfect: <input value={5} name='quality' type='radio'/></label>
          </div>) : (<></>)}
          {(chars.includes('Length')) ? (<div id='revChar'>
            <label id='rchar'><b>Length</b></label>
            <label id='radioLabels'> Runs Short: <input value={1} name='length' type='radio'/></label>
            <label id='radioLabels'> Runs slightly tight: <input value={2} name='length' type='radio'/> </label>
            <label id='radioLabels'> Perfect: <input value={3} name='length' type='radio'/> </label>
            <label id='radioLabels'> Runs slightly long: <input value={4} name='length' type='radio'/></label>
            <label id='radioLabels'> Runs long: <input value={5} name='length' type='radio'/></label>
          </div>) : (<></>)}
          {(chars.includes('Fit')) ? (<div id='revChar'>
            <label id='rchar'><b>Fit</b></label>
            <label id='radioLabels'> Runs tight: <input value={1}name='fit' type='radio'/></label>
            <label id='radioLabels'> Runs slightly short: <input value={2} name='fit' type='radio'/></label>
            <label id='radioLabels'> Perfect: <input value={3} name='fit' type='radio'/></label>
            <label id='radioLabels'> Runs slightly long: <input value={4} name='fit' type='radio'/></label>
            <label id='radioLabels'> Runs long: <input value={5} name='fit' type='radio'/></label>
          </div>) : (<></>)}
          <p>Review Summary: </p>
          <input style={{width:'100%',height:'20px'}} placeholder='Example: Best purchase ever!'  onChange={handleSummary}/>
          <div id='reviewText'>
            <p>Review: </p>
            <textarea style={{width:'100%'}} maxLength='1000' placeholder='Why did you like the product or not?' onChange={handleReview}></textarea>
            <i id='testing' style={{color:'rgb(160,160,160)', fontSize:'12px'}}>{num}</i>
          </div>
            <div id='rnic'>
              <p>Nickname: </p>
              <input maxLength='60' style={{width:'100%',height:'20px'}} placeholder='Example: jackson11' />
              <span style={{color:'rgb(180,180,180)', fontSize:'10px', minWidth: '250px'}}>“For privacy reasons, do not use your full name or email address</span>
            </div>
            <div id='remail'>
              <p>Email: </p>
              <input type='email' maxLength='60' style={{width:'100%',height:'20px'}} placeholder='Example: jackson11@email.com'/>
              <span style={{color:'rgb(180,180,180)', fontSize:'10px', minWidth: '250px'}}>For authentication reasons, you will not be emailed</span>
            </div>
          <div id='rbuttons'>
            <button id='rImages'><b>ADD IMAGES</b></button>
            <button id='rSubmit'><b>SUBMIT</b></button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default Review_Modal;