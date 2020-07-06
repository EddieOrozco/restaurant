import React from 'react';

const Menu = ({ a: { itemName, itemDes, itemPrice, itemQuantity } }) => {
  return (
    <div>
      <div className='col-lg-6 menu-item filter-starters'>
        <div className='menu-content'>
          <h6>
            {itemName}
            {itemQuantity}
          </h6>
          <span>{itemPrice} </span>
        </div>
        <div className='menu-ingredients'>{itemDes}</div>
      </div>
    </div>
  );
};

export default Menu;
