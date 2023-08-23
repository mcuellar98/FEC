import React, {useState, useRef} from 'react';
import YOCard from './YOCard';
import _ from 'underscore';

const YourOutfits = ({outfitImage, outfitInfo, productRating}) => {

  const [outfitList, setOutfitList] = useState([]);
  const outfits = useRef([]);

  const deleteCard = (id) => {
    var newList = [];
    _.each(outfits.current, (outfit) => {
      if (outfit.props.outfitInfo.id !== id) {
        newList.push(outfit);
      }
    });
    setOutfitList(newList);
  };

  const addOutfit = (e) => {
    setOutfitList(outfitList.concat(<YOCard key={outfitInfo.id} outfitImage={outfitImage} outfitInfo={outfitInfo} productRating={productRating} deleteCard={deleteCard}/>));
    outfits.current = [];
  };


  return (
    <div className='your_outfits_container'>

      {_.map(outfitList, (outfit) => {
        outfits.current.push(outfit);
        return outfit;
      })}
      <div className='outfit_card'>
        <div className='add_outfit_content'>
          <p className='add_outfit_text'>Add Outfit</p>
          <button className='add_outfit_button' onClick={addOutfit}> + </button>
        </div>
      </div>
    </div>
  );
};

export default YourOutfits;