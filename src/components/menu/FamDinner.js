import React from 'react';

export const FamDinner = ({ famDinner: { itemName, itemDes, itemPrice } }) => {
  return (
    <div>
      <div class='col-lg-6 menu-item filter-starters'>
        <div class='menu-content'>
          <a href='#'>{itemName}</a>
          <span>{itemPrice} </span>
        </div>
        <div class='menu-ingredients'>{itemDes}</div>
      </div>
    </div>
  );
};

export default FamDinner;
