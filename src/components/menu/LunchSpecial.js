import React from 'react';

export const LunchSpecial = ({
  lunch: {
    itemName,
    itemDes,
    itemPriceSmall,
    itemNameO,
    itemPriceSmallO,
    itemDesO,
  },
}) => {
  return (
    <div>
      <div class='col-lg-6 menu-item filter-starters'>
        <div class='menu-content'>
          <a href='#'>{itemName}</a>
          <span>{itemPriceSmall}</span>
        </div>
        <div class='menu-ingredients'>{itemDes}</div>
      </div>
    </div>
  );
};

export default LunchSpecial;
