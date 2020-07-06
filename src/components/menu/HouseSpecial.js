import React from 'react';

const LunchSpecial = ({
  house: { itemName, itemDes, itemPriceSmall, itemPriceLarge, isHot },
}) => {
  return (
    <div>
      <div className='col-lg-6 menu-item filter-starters'>
        <div className='menu-content'>
          <h6>
            {itemName}
            <i className='fas fa-pepper-hot' style={{ color: 'red' }}></i>
          </h6>
          <span>Small {itemPriceSmall}, </span>
          <span>Large {itemPriceLarge}</span>
        </div>
        <div className='menu-ingredients'>{itemDes}</div>
      </div>
    </div>
  );
};

export default LunchSpecial;
