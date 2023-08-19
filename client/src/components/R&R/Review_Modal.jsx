import React, { useState, useEffect } from 'react';
import AddImage from './AddImage.jsx'
import { postReview } from '../../../fetch.jsx'

const Review_Modal = ( props ) => {
  //#region
  const [ rating,setRating ] = useState(0);
  const [ chars,setChars ] = useState([]);
  const [ summary,setSummary ] = useState('');
  const [ rev,setRev ] = useState('');
  const [ images,setImg ] = useState([]);
  const [ num, setNum ] = useState('Minimum required characters left: 50');
  const [ rec, setRec ] = useState('');
  const [ email,setEmail ] = useState('');
  const [ name,setName ] = useState('');
  const [ size,setSize ] = useState(0);
  const [ width,setWidth ] = useState(0);
  const [ length,setLength ] = useState(0);
  const [ comfort,setComfort ] = useState(0);
  const [ fit,setFit ] = useState(0);
  const [ quality,setQuality ] = useState(0);
//#endregion

  const imagesLength = [1,2,3,4,5];

  useEffect(() => {
    var characteristics = Object.keys(props.meta.characteristics)
    setChars(characteristics);
    console.log(props.meta)
  },[props.meta])
  useEffect(() => {
    console.log(images);
  },[images])
//#region handle info
  const handleExit = (e) => {
    e.preventDefault();
    if (e.target.keyCode === 13) {
      e.preventDefault();
    }
    props.sV(false);
  }
  const handleStar = (e,value) => {
    console.log(value)
    setRating(value);
    for (var i = 5; i > value; i--) {
      var el = document.getElementById(i);
      el.textContent = '☆';
    }
    for (var i = value; i > 0; i--) {
      var el = document.getElementById(i);
      el.textContent = '★';
    }
  }
  const handleSummary = (e) => {
    setSummary(e.target.value)
    return false;
  }
  const handleReview = (e) => {
    setRev(e.target.value)
    if (e.target.value.length < 50) {
      setNum(`Minimum required characters left: ${50 - e.target.value.length}`)
    } else {
      setNum('Minimum Reached')
    }
  }
  const addingImage = (url) => {
    setImg(prevData => {
      const data = [...prevData];
      data.push(url);
      return data;
    })
  }
  const handleYes = (e) => {
    setRec(true);
  }
  const handleNo = (e) => {
    setRec(false);
  }
  const handleName = (e) => {
    e.preventDefault();
    setName(e.target.value);
  }
  const handleEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  }

  const handleSize = (e, value) => {
    setSize(value);
  }
  const handleWidth = (e, value) => {
    setWidth(value);
  }
  const handleComfort = (e, value) => {
    setComfort(value);
  }
  const handleQuality = (e, value) => {
    setQuality(value);
  }
  const handleLength = (e, value) => {
    setLength(value);
  }
  const handleFit = (e, value) => {
    setFit(value);
  }
  //#endregion

  const handleSubmit = (e) => {
    var obj = {};
    e.preventDefault();
    chars.forEach(char => {
      if (size !== 0 && char === 'Size') {
        obj[char] = size;
      } else if (width !== 0 && char === 'Width') {
        obj[char] = width;
      } else if (length !== 0 && char === 'Length') {
        obj[char] = length;
      } else if (comfort !== 0 && char === 'Comfort') {
        obj[char] = comfort;
      } else if (fit !== 0 && char === 'Fit') {
        obj[char] = fit;
      } else if (quality !== 0 && char === 'Quality') {
        obj[char] = quality;
      } else {
        alert('Characteristics Must Be Rated!');
      }
    })
    if (rating === 0) {
      alert('Product Must Be Rated!');
    }
    if (rec === '') {
      alert('Recommendation Option Must Be Selected!');
    }
    if (rev.length < 50) {
      alert('Review Must Be Written!');
    }
    if (name.length === 0) {
      alert('Username Must Be Input!');
    }
    if (email.length === 0) {
      alert('Email Must Be Input!');
    }
    else {
    // postReview( {product_id: props.id, rating: rating, summary: summary, body: rev, recommend: rec, name: name, email: email, photos: images, characteristics:obj} )
      props.sV(false);
    }
  }
  const delImage = (url) => {
    setImg(prevData => {
      const data = [...prevData];
      const ind = data.indexOf(url);
      data.splice(ind,1);
      return data;
    })
  }
  {/* Please dont judge me too hard if youre reading this code */}
  return (
    <form id='revModal' onSubmit={(e) => handleSubmit(e)}>
      <div id='revTest'>
        <button id='rExit'><span onClick={(e)=>{handleExit(e)}} >X</span></button>
        <div id='rform'>
        <p> Overall Rating: </p>
          <div id='crStars'>
            <span id={1} onClick={(e) => {handleStar(e,1)}}>☆</span><span id={2} onClick={(e) => {handleStar(e,2)}}>☆</span><span id={3} onClick={(e) => {handleStar(e,3)}}>☆</span><span id={4} onClick={(e) => {handleStar(e,4)}}>☆</span><span id={5} onClick={(e) => {handleStar(e,5)}}>☆</span>
          </div>
          <div id='revRec'>
            <p>Do You Recommend This Product? </p>
            <label id='radioLabels'> Yes: <input name='recommend' onClick={handleYes} type='radio'/> </label>
            <label id='radioLabels'> No: <input name='recommend' onClick={handleNo} type='radio'/> </label>
          </div>
          {(chars.includes('Size')) ? (<div id='revChar'>
            <label id='rchar'><b>Size</b></label>
            <label id='radioLabels'> A size too small: <input onClick={(e)=>{handleSize(e, 1)}} name='size' type='radio'/></label>
            <label id='radioLabels'> ½ a size too small: <input onClick={(e)=>{handleSize(e, 2)}} name='size' type='radio'/></label>
            <label id='radioLabels'> Perfect: <input onClick={(e)=>{handleSize(e, 3)}} name='size' type='radio'/></label>
            <label id='radioLabels'> ½ a size too big: <input onClick={(e)=>{handleSize(e, 4)}} name='size' type='radio'/></label>
            <label id='radioLabels'> A size too wide: <input onClick={(e)=>{handleSize(e, 5)}} name='size' type='radio'/></label>
          </div>) : (<></>)}
          {(chars.includes('Width')) ? (<div id='revChar'>
            <label id='rchar'><b>Width</b></label>
            <label id='radioLabels'> Too narrow: <input onClick={(e)=>{handleWidth(e, 1)}} name='width' type='radio' /></label>
            <label id='radioLabels'> Slightly narrow: <input onClick={(e)=>{handleWidth(e, 2)}} name='width' type='radio'/> </label>
            <label id='radioLabels'> Perfect: <input onClick={(e)=>{handleWidth(e, 3)}} name='width' type='radio'/> </label>
            <label id='radioLabels'> Slightly wide: <input onClick={(e)=>{handleWidth(e, 4)}} name='width' type='radio'/> </label>
            <label id='radioLabels'> Too wide: <input onClick={(e)=>{handleWidth(e, 5)}} name='width' type='radio'/> </label>
          </div>) : (<></>)}
          {(chars.includes('Comfort')) ? (<div id='revChar'>
            <label id='rchar'><b>Comfort</b></label>
            <label id='radioLabels'> Uncomfortable: <input onClick={(e)=>{handleComfort(e, 1)}} name='comfort' type='radio'/></label>
            <label id='radioLabels'> Slightly uncomfortable: <input onClick={(e)=>{handleComfort(e, 2)}} name='comfort' type='radio'/></label>
            <label id='radioLabels'> Ok: <input onClick={(e)=>{handleComfort(e, 3)}} name='comfort' type='radio'/></label>
            <label id='radioLabels'> Comfortable: <input onClick={(e)=>{handleComfort(e, 4)}} name='comfort' type='radio'/></label>
            <label id='radioLabels'> Perfect: <input onClick={(e)=>{handleComfort(e, 5)}} name='comfort' type='radio'/></label>
          </div>) : (<></>)}
          {(chars.includes('Quality')) ? (<div id='revChar'>
            <label id='rchar'><b>Quality</b></label>
            <label id='radioLabels'> Runs slightly short: <input onClick={(e)=>{handleQuality(e, 1)}} name='quality' type='radio'/></label>
            <label id='radioLabels'> Below average: <input onClick={(e)=>{handleQuality(e, 2)}} name='quality' type='radio'/></label>
            <label id='radioLabels'> What I expected: <input onClick={(e)=>{handleQuality(e, 3)}} name='quality' type='radio'/></label>
            <label id='radioLabels'> Pretty great: <input onClick={(e)=>{handleQuality(e, 4)}} name='quality' type='radio'/></label>
            <label id='radioLabels'> Perfect: <input onClick={(e)=>{handleQuality(e, 5)}} name='quality' type='radio'/></label>
          </div>) : (<></>)}
          {(chars.includes('Length')) ? (<div id='revChar'>
            <label id='rchar'><b>Length</b></label>
            <label id='radioLabels'> Runs Short: <input onClick={(e)=>{handleLength(e, 1)}} name='length' type='radio'/></label>
            <label id='radioLabels'> Runs slightly tight: <input onClick={(e)=>{handleLength(e, 2)}} name='length' type='radio'/> </label>
            <label id='radioLabels'> Perfect: <input onClick={(e)=>{handleLength(e, 3)}} name='length' type='radio'/> </label>
            <label id='radioLabels'> Runs slightly long: <input onClick={(e)=>{handleLength(e, 4)}} name='length' type='radio'/></label>
            <label id='radioLabels'> Runs long: <input onClick={(e)=>{handleLength(e, 5)}} name='length' type='radio'/></label>
          </div>) : (<></>)}
          {(chars.includes('Fit')) ? (<div id='revChar'>
            <label id='rchar'><b>Fit</b></label>
            <label id='radioLabels'> Runs tight: <input onClick={(e)=>{handleFit(e, 1)}}name='fit' type='radio'/></label>
            <label id='radioLabels'> Runs slightly short: <input onClick={(e)=>{handleFit(e, 2)}} name='fit' type='radio'/></label>
            <label id='radioLabels'> Perfect: <input onClick={(e)=>{handleFit(e, 3)}} name='fit' type='radio'/></label>
            <label id='radioLabels'> Runs slightly long: <input onClick={(e)=>{handleFit(e, 4)}} name='fit' type='radio'/></label>
            <label id='radioLabels'> Runs long: <input onClick={(e)=>{handleFit(e, 5)}} name='fit' type='radio'/></label>
          </div>) : (<></>)}
          <p>Review Summary: </p>
          <input type='text' style={{width:'100%',height:'20px'}} placeholder='Example: Best purchase ever!' onChange={handleSummary}/>
          <div id='reviewText'>
            <p>Review: </p>
            <textarea style={{width:'100%'}} maxLength='1000' placeholder='Why did you like the product or not?' onChange={handleReview}></textarea>
            <i id='testing' style={{color:'rgb(160,160,160)', fontSize:'12px'}}>{num}</i>
          </div>
          <p>Add Images:</p>
          <div id='rAddImages'>
            {imagesLength.map((num) => {
              return (<AddImage key={num} img={images} add={addingImage} del={delImage}/>)
            })}
          </div>
          <div id='rnic'>
            <p>Nickname: </p>
            <input maxLength='60' style={{width:'100%',height:'20px'}} onChange={handleName} placeholder='Example: jackson11' />
            <span style={{color:'rgb(180,180,180)', fontSize:'10px', minWidth: '250px'}}>For privacy reasons, do not use your full name or email address</span>
          </div>
          <div id='remail'>
            <p>Email: </p>
            <input type='email' onChange={handleEmail} maxLength='60' style={{width:'100%',height:'20px'}} placeholder='Example: jackson11@email.com'/>
            <span style={{color:'rgb(180,180,180)', fontSize:'10px', minWidth: '250px'}}>For authentication reasons, you will not be emailed</span>
          </div>
          <div id='rbuttons'>
            <button id='rSubmit'><b>SUBMIT</b></button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default Review_Modal;