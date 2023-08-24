import React, {useState, useRef, useEffect} from 'react';
import YOCard from './YOCard';
import _ from 'underscore';

const YourOutfits = ({outfitImage, outfitInfo, productRating, canAddOutfit, setCanAddOutfit, product_id}) => {

  const [outfitList, setOutfitList] = useState([]);
  const [idToDelete, setIdToDelete] = useState(0);

  const deleteCard = (id) => {
    var newList = [];
    _.each(outfitList, (outfit) => {
      if (outfit.props.outfitInfo.id !== id) {
        newList.push(outfit);
      }
    });
    if (id === product_id) {
      setCanAddOutfit(true);
    }
    setIdToDelete(0);
    setOutfitList(newList);
  };

  useEffect(() => {
    deleteCard(idToDelete);
  }, [idToDelete]);

  const addOutfit = (e) => {
    setOutfitList(outfitList.concat(<YOCard key={outfitInfo.id} outfitImage={outfitImage} outfitInfo={outfitInfo} productRating={productRating} setIdToDelete={setIdToDelete}/>));
    setCanAddOutfit(false);
  };

  return (
    <div className='your_outfits_container'>
      {_.map(outfitList, (outfit) => {
        return outfit;
      })}
      { canAddOutfit ? <div className='outfit_card'>
        <div className='add_outfit_content'>
          <p className='add_outfit_text'>Add Outfit</p>
          <button className='add_outfit_button' onClick={addOutfit}> + </button>
        </div>
      </div> : null }
    </div>
  );
};

export default YourOutfits;