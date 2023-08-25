import React, {useState, useRef, useEffect} from 'react';
import YOCard from './YOCard';
import _ from 'underscore';
import $ from 'jquery';

const YourOutfits = ({outfitImage, outfitInfo, productRating, canAddOutfit, setCanAddOutfit, product_id}) => {

  const [outfitList, setOutfitList] = useState([]);
  const [idToDelete, setIdToDelete] = useState(0);
  const [scrollRight, setScrollRight] = useState(false);
  const [scrollLeft, setScrollLeft] = useState(false);

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

  useEffect(() => {
    if (outfitList.length === 0) {
      setScrollRight(false);
    } else if (outfitList.length > 0 && $($('.yo_card')[outfitList.length - 1]).position().left + $($('.yo_card')[outfitList.length - 1]).width() < $('#yo_list').width()) {
      setScrollRight(false);
    } else {
      setScrollRight(true);
    }
  }, [outfitList, canAddOutfit]);

  const addOutfit = (e) => {
    setOutfitList([<YOCard key={outfitInfo.id} outfitImage={outfitImage} outfitInfo={outfitInfo} productRating={productRating} setIdToDelete={setIdToDelete}/>].concat(outfitList));
    setCanAddOutfit(false);
  };

  const handleScrollLeft = (e) => {
    e.preventDefault();
    var elements = $('.yo_card, #add_outfit');
    elements.each((index, element) => {
      if ($(element).position().left < 0 && $(elements[index + 1]).position().left >= 0) {
        if (index === 0) {
          setScrollLeft(false);
        }
        if (!scrollRight) {
          setScrollRight(true);
        }
        var leftScrollTarget = elements[index];
        leftScrollTarget.scrollIntoView({behavior: 'smooth', block: 'nearest'});
      }
    });
  };

  const handleScrollRight = (e) => {
    e.preventDefault();
    $('.yo_card').each((index, element) => {
      if ($(element).width() + $(element).position().left > $('#yo_list').width() && $($('.yo_card')[index - 1]).position().left + $($('.yo_card')[index - 1]).width() < $('#yo_list').width()) {
        if (index === $('.yo_card').length - 1) {
          setScrollRight(false);
        }
        if (!scrollLeft) {
          setScrollLeft(true);
        }
        var leftScrollTarget = $('.yo_card')[index];
        leftScrollTarget.scrollIntoView({behavior: 'smooth', block: 'nearest'});
      }
    });
  };

  const handleResize = () => {
    var cards = $('.yo_card');
    var firstCard = $($('.yo_card')[0]);
    for (var i = 0; i < cards.length; i++) {
      if ($(cards[i]).position().left + $(cards[i]).width() > $('#yo_list').width()) {
        setScrollRight(true);
      } else {
        setScrollRight(false);
      }
    }
    if (firstCard.position().left >= 0) {
      setScrollLeft(false);
    }
  };

  var addScrollRighOnResize;
  window.onresize = function() {
    clearTimeout(addScrollRighOnResize);
    addScrollRighOnResize = setTimeout(handleResize, 100);
  };

  return (
    <div id='yo_list' className='your_outfits_container'>
      {scrollLeft ? <button className='yo_scroll_left_button' onClick={handleScrollLeft}>{'<'}</button> : null}
      { canAddOutfit ? <div id='add_outfit' className='outfit_card'>
        <div className='add_outfit_content'>
          <p className='add_outfit_text'>Add Outfit</p>
          <button className='add_outfit_button' onClick={addOutfit}> + </button>
        </div>
      </div> : null }
      {_.map(outfitList, (outfit) => {
        return outfit;
      })}
      {scrollRight ? <button className='yo_scroll_right_button' onClick={handleScrollRight}>{'>'}</button> : null}
    </div>
  );
};

export default YourOutfits;