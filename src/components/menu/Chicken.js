import React from 'react';

export const Chicken = ({
  chicken: { itemName, itemDes, itemPriceS, itemPriceL },
}) => {
  return (
    <div>
      <div class='col-lg-6 menu-item filter-starters'>
        <div class='menu-content'>
          <a href='#'>{itemName}</a>
          <span>Small {itemPriceS}, </span>
          <span>Large {itemPriceL}</span>
        </div>
        <div class='menu-ingredients'>{itemDes}</div>
      </div>
    </div>
  );
};

export default Chicken;
