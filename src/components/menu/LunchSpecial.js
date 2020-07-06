import React from 'react';

export const LunchSpecial = ({
  lunch: { itemName, itemDes, itemPriceSmall },
}) => {
  return (
    <div>
      <div className='col-lg-6 menu-item filter-starters'>
        <div className='menu-content'>
          <h6>{itemName}</h6>
          <span>{itemPriceSmall}</span>
        </div>
        <div className='menu-ingredients'>{itemDes}</div>
      </div>
    </div>
  );
};

export default LunchSpecial;
