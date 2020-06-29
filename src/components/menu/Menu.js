import React from 'react';

const Menu = ({ a: { itemName, itemDes, itemPrice, itemQuantity } }) => {
  return (
    <div>
      <div class='col-lg-6 menu-item filter-starters'>
        <div class='menu-content'>
          <a href='#'>
            {itemName}
            {itemQuantity}
          </a>
          <span>{itemPrice} </span>
        </div>
        <div class='menu-ingredients'>{itemDes}</div>
      </div>
    </div>
  );
};

export default Menu;
