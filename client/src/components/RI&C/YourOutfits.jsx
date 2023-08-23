import React, {useState} from 'react';
import YOCard from './YOCard';
import _ from 'underscore';

const YourOutfits = ({outfitImage, outfitInfo, productRating}) => {

  const [outfitList, setOutfitList] = useState([]);

  const addOutfit = (e) => {
    e.preventDefault();
    setOutfitList(outfitList.concat(<YOCard key={outfitInfo.id} outfitImage={outfitImage} outfitInfo={outfitInfo} productRating={productRating}/>));
  };

  return (
    <div className='your_outfits_container'>
      {_.map(outfitList, (outfit) => {
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