import React from 'react';

export const ChopChow = ({
  chopChow: { itemName, itemDes, itemPriceS, itemPriceL },
}) => {
  return (
    <div>
      <div className='col-lg-6 menu-item filter-starters'>
        <div className='menu-content'>
          <h6>{itemName}</h6>
          <span>Small {itemPriceS}, </span>
          <span>Large {itemPriceL}</span>
        </div>
        <div className='menu-ingredients'>{itemDes}</div>
      </div>
    </div>
  );
};

export default ChopChow;
