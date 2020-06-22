import React from 'react';

export const LunchSpecial = ({
  lunch: {
    itemName,
    itemDes,
    itemPriceSmall,
    itemNameOther,
    itemPriceSmallOther,
    itemDesOther,
  },
}) => {
  return (
    <div>
      <div class='row menu-container'>
        <div class='col-lg-6 menu-item filter-starters'>
          <div class='menu-content'>
            <a href='#'>{itemName}</a>
            <span>{itemPriceSmall}</span>
          </div>
          <div class='menu-ingredients'>{itemDes}</div>
        </div>
        <div class='col-lg-6 menu-item filter-specialty'>
          <div class='menu-content'>
            <a href='#'>{itemNameOther}</a>
            <span>{itemPriceSmallOther}</span>
          </div>
          <div class='menu-ingredients'>{itemDesOther}</div>
        </div>
      </div>
    </div>
  );
};

export default LunchSpecial;
