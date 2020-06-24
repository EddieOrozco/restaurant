import React from 'react';

export const LunchSpecial = ({
  house: { itemName, itemDes, itemPriceSmall, itemPriceLarge },
}) => {
  return (
    <div>
      <div class='col-lg-6 menu-item filter-starters'>
        <div class='menu-content'>
          <a href='#'>
            {itemName}
            <i class='fas fa-pepper-hot' style={{ color: 'red' }}></i>
          </a>
          <span>Small {itemPriceSmall}, </span>
          <span>Large {itemPriceLarge}</span>
        </div>
        <div class='menu-ingredients'>{itemDes}</div>
      </div>
    </div>
  );
};

export default LunchSpecial;
